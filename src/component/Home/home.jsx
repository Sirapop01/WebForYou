import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import centerImage from '../img/child.jpg';

function Home() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/yes');
  };

  const handleNoClick = () => {
    // คงเดิม
  };

  return (
    <div className="home">
      <div className="content-container">
        <div className="text-container">
          <h1>
            <span className="wave-text" style={{"--i": 1}}>เ</span>
            <span className="wave-text" style={{"--i": 2}}>ป็</span>
            <span className="wave-text" style={{"--i": 3}}>น</span>
            <span className="wave-text" style={{"--i": 4}}>&nbsp;</span>
            <span className="wave-text" style={{"--i": 5}}>แ</span>
            <span className="wave-text" style={{"--i": 6}}>ฟ</span>
            <span className="wave-text" style={{"--i": 7}}>น</span>
            <span className="wave-text" style={{"--i": 8}}>&nbsp;</span>
            <span className="wave-text" style={{"--i": 9}}>กั</span>
            <span className="wave-text" style={{"--i": 10}}>น</span>
            <span className="wave-text" style={{"--i": 11}}>&nbsp;</span>
            <span className="wave-text" style={{"--i": 12}}>ไ</span>
            <span className="wave-text" style={{"--i": 13}}>ห</span>
            <span className="wave-text" style={{"--i": 14}}>ม</span>
          </h1>
        </div>
        <div className="image-container">
          <img src={centerImage} alt="center" className="center-image" />
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