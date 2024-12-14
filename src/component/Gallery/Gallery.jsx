import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaItems = [
    { 
      id: 1, 
      type: 'image',
      src: require('../img/img1.jpg'), 
      caption: 'Our Sweet Moment',
      width: 300,  // กำหนดขนาดรูปภาพ
      height: 400
    },
    { 
      id: 2, 
      type: 'video',
      src: require('../videos/video1.mp4'), 
      caption: 'My Love 💕',
      width: 400,  // กำหนดขนาดวิดีโอ
      height: 300
    },
    { 
      id: 3, 
      type: 'image',
      src: require('../img/img2.jpg'), 
      caption: 'Together Forever',
      width: 300,
      height: 400
    },
    { 
      id: 4, 
      type: 'video',
      src: require('../videos/video2.mp4'), 
      caption: 'Happy Memory',
      width: 400,
      height: 300
    },
    // เพิ่มรูปภาพ
    { 
      id: 5, 
      type: 'image',
      src: require('../img/img7.jpg'), 
      caption: 'Sweet Day',
      width: 300,
      height: 400
    },
    { 
      id: 6, 
      type: 'image',
      src: require('../img/img4.jpg'), 
      caption: 'Beautiful Moment',
      width: 300,
      height: 400
    },
    // เพิ่มวิดีโอ
    { 
      id: 7, 
      type: 'video',
      src: require('../videos/video3.mp4'), 
      caption: 'Lovely Time',
      width: 400,
      height: 300
    },
    { 
      id: 8, 
      type: 'image',
      src: require('../img/img12.jpg'), 
      caption: 'Happy Together',
      width: 300,
      height: 400
    },
    { 
      id: 9, 
      type: 'video',
      src: require('../videos/video4.mp4'), 
      caption: 'Special Moment',
      width: 400,
      height: 300
    },
    { 
      id: 10, 
      type: 'image',
      src: require('../img/img13.jpg'), 
      caption: 'Love Forever',
      width: 300,
      height: 400
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const renderMediaItem = (item) => {
    if (item.type === 'image') {
      return <img src={item.src} alt={item.caption} />;
    } else if (item.type === 'video') {
      return (
        <video controls muted loop onClick={(e) => e.target.play()}>
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <div className="gallery-page">
      <h1>Our Sweet Memories 💑</h1>
      <div className="slideshow-container">
        <div className="slide">
          {renderMediaItem(mediaItems[currentIndex])}
          <div className="media-caption">
            {mediaItems[currentIndex].caption}
          </div>
        </div>
        
        <button className="nav-button prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="nav-button next" onClick={nextSlide}>
          ❯
        </button>

        <div className="dots-container">
          {mediaItems.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery; 