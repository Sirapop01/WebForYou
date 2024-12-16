import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Yes.css';

function Yes() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    "ชื่อ-นามสกุล": '',
    "ชื่อเล่น": '',
    "อายุ": '',
    "เบอร์โทรศัพท์": '',
    "สัตว์ที่ชอบ": '',
    "ดอกไม้ที่ชอบ": '',
    "สีที่ชอบ": '',
    "ถ้าได้ไปเที่ยวด้วยกัน อยากไปที่ไหน": '',
    "มีอะไรอยากบอกกันไหม": ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // ตรวจสอบแต่ละฟิลด์
    Object.keys(formData).forEach(key => {
      if (!formData[key].trim()) {
        newErrors[key] = `กรุณากรอก${key}`;
      }
    });

    // ตรวจสอบรูปแบบเบอร์โทร
    if (formData["เบอร์โทรศัพท์"] && !/^\d{10}$/.test(formData["เบอร์โทรศัพท์"])) {
      newErrors["เบอร์โทรศัพท์"] = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)";
    }

    // ตรวจสอบอายุ
    if (formData["อายุ"] && (isNaN(formData["อายุ"]) || formData["อายุ"] < 1)) {
      newErrors["อายุ"] = "กรุณากรอกอายุให้ถูกต้อง";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        console.log('กำลังส่งข้อมูล:', formData); // เพิ่ม log

        const response = await fetch('http://localhost:3001/send-to-line', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData })
        });

        const result = await response.json(); // เพิ่มการอ่านผลลัพธ์
        console.log('ผลการส่ง:', result); // เพิ่ม log

        if (response.ok) {
          alert('ส่งข้อมูลสำเร็จ!');
          navigate('/pincheck');
        } else {
          alert('เกิดข้อผิดพลาด: ' + result.error);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('เกิดข้อผิดพลาดในการส่งข้อมูล: ' + error.message);
      }
    }
  };

  return (
    <div className="yes-page">
      <div className="form-container">
        <h1>Personal Information <span className="heart-icon">💕</span></h1>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((fieldName) => (
            <div className="form-group" key={fieldName}>
              <label>{fieldName}:</label>
              {fieldName === "มีอะไรที่อยากให้พี่รู้เกี่ยวกับหนูอีกไหม" ? (
                <textarea
                  name={fieldName}
                  value={formData[fieldName]}
                  onChange={handleChange}
                  placeholder={`กรุณากรอก${fieldName}`}
                  className={errors[fieldName] ? 'error' : ''}
                  rows="4"
                />
              ) : (
                <input
                  type={
                    fieldName === "อายุ" ? "number" : 
                    fieldName === "เบอร์โทรศัพท์" ? "tel" : 
                    "text"
                  }
                  name={fieldName}
                  value={formData[fieldName]}
                  onChange={handleChange}
                  placeholder={`กรุณากรอก${fieldName}`}
                  className={errors[fieldName] ? 'error' : ''}
                />
              )}
              {errors[fieldName] && (
                <div className="error-message">{errors[fieldName]}</div>
              )}
            </div>
          ))}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Yes;
