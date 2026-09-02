import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 3 seconds duration for the loading animation
    const duration = 3000;
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Wait a small delay at 100% before starting exit animation
        setTimeout(() => {
          setIsExiting(true);
          // Wait for exit transition to finish before unmounting
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800); // matches transition duration in CSS
        }, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${isExiting ? 'exit' : ''}`}>
      <div className="splash-content">
        <h1 className="splash-title">
          <span className="splash-bracket">&lt; </span>
          <span className="splash-name">Bharani</span>
          <span className="splash-domain">.dev</span>
          <span className="splash-bracket"> &gt;</span>
        </h1>
        <div className="splash-loading-info">
          <span className="splash-booting">booting...</span>
          <span className="splash-percentage">{progress}%</span>
        </div>
        <div className="splash-progress-container">
          <div className="splash-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
