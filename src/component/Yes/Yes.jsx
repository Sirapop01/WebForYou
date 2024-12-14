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
    "มีอะไรอยากจะบอกกันไหม": ''
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      navigate('/pincheck');
    }
  };

  return (
    <div className="yes-page">
      <div className="form-container">
        <h1>Personal Information 💕</h1>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((fieldName) => (
            <div className="form-group" key={fieldName}>
              <label>{fieldName}:</label>
              <input
                type={fieldName === "อายุ" ? "number" : 
                      fieldName === "เบอร์โทรศัพท์" ? "tel" : "text"}
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleChange}
                placeholder={`กรุณากรอก${fieldName}`}
                className={errors[fieldName] ? 'error' : ''}
              />
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
