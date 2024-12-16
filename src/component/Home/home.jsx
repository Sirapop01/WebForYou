import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import centerImage from '../img/img14.jpg';

function Home() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/yes');
  };

  const messages = [
    "อย่ากดปุ่ม No สิ 😢",
    "ลองกดปุ่ม Yes ดูไหม? 🥺",
    "ไม่เอาน่า กด Yes เถอะ ❤️",
    "คิดดีๆ นะ กด Yes ก็ได้นะ 💕",
    "อยากให้กด Yes จังเลย 🥹",
    "ขอร้องละ กด Yes นะ 🙏",
    "ไม่ยอมแพ้ง่ายๆ หรอก กด Yes สิ! 💪",
    "ถ้ากด Yes จะมีเซอร์ไพรส์ 🎁",
    "No เป็นคำที่ไม่ควรมีในพจนานุกรม 📖"
  ];

  const [currentMessage, setCurrentMessage] = useState("");

  const handleNoClick = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setCurrentMessage(messages[randomIndex]);
  };

  return (
    <div className="home">
      <div className="content-container">
        <div className="text-container">
          <h1>
            <span className="wave-text" style={{"--i": 1}}>เ</span>
            <span className="wave-text" style={{"--i": 2}}>ป็</span>
            <span className="wave-text" style={{"--i": 3}}>น</span>
            <span className="wave-text" style={{"--i": 4}}>แ</span>
            <span className="wave-text" style={{"--i": 5}}>ฟ</span>
            <span className="wave-text" style={{"--i": 6}}>น</span>
            <span className="wave-text" style={{"--i": 7}}>กั</span>
            <span className="wave-text" style={{"--i": 8}}>น</span>
            <span className="wave-text" style={{"--i": 9}}>ไ</span>
            <span className="wave-text" style={{"--i": 10}}>ห</span>
            <span className="wave-text" style={{"--i": 11}}>ม</span>
          </h1>
        </div>
        <div className="image-container">
          <img src={centerImage} alt="center" className="center-image" />
        </div>
        <div className="message-box">
          {currentMessage && <p className="random-message">{currentMessage}</p>}
        </div>
        <div className="button-container">
          <button className="bt-yes" onClick={handleYesClick}>
            YES
          </button>
          <button className="bt-no" onClick={handleNoClick}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;