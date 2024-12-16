import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Countdown.css';

function Countdown() {
  const [count, setCount] = useState(5);
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const correctPin = "120148"; // PIN ที่ถูกต้อง

  useEffect(() => {
    if (!showPin) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === 1) {
            clearInterval(timer);
            setShowPin(true);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showPin]);

  const handlePinChange = (index, value) => {
    if (value.length <= 1) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Move to next input
      if (value !== '' && index < 5) {
        inputRefs.current[index + 1].focus();
      }

      // Check if PIN is complete and correct
      if (index === 5 && value !== '') {
        const enteredPin = newPin.join('');
        if (enteredPin === correctPin) {
          navigate('/home');
        } else {
          // Clear PIN if incorrect
          setPin(['', '', '', '', '', '']);
          inputRefs.current[0].focus();
        }
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && pin[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const createFloatingHeart = (e) => {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.className = 'floating-hearts';
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
      document.body.removeChild(heart);
    }, 4000);
  };

  return (
    <div className="countdown-container" onClick={createFloatingHeart}>
      {!showPin ? (
        <>
          <div className="heart-container">
            <div className="heart"></div>
          </div>
          <div className="countdown-number">{count}</div>
        </>
      ) : (
        <>
          <div className="pin-container">
            <h2>รหัสผ่าน คือ วันที่คนน่ารักที่สุดในโลกเกิดมา 💕</h2>
            <div className="pin-inputs">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  pattern="\d*"
                  inputMode="numeric"
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Countdown; 