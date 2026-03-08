import React, { useState, useEffect } from 'react';

/**
 * Full-screen cinematic loading screen.
 * Runs a fake progress bar from 0→100%, then fades out and calls `onDone`.
 */
const Loader = ({ onDone }) => {
  const [pct,  setPct]  = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let val = 0;
    const interval = setInterval(() => {
      val += Math.random() * 8 + 3;
      if (val >= 100) {
        val = 100;
        clearInterval(interval);
        setTimeout(() => {
          setHide(true);
          setTimeout(onDone, 800);
        }, 400);
      }
      setPct(Math.min(Math.floor(val), 100));
    }, 60);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className={`loader-container${hide ? ' hidden' : ''}`}>
      <div style={{ textAlign: 'center' }}>
        <p className="loader-name">Muhammed Faheem</p>
        <p className="loader-title">Full-Stack Developer</p>

        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: pct + '%' }} />
        </div>

        <p className="loader-percent">{String(pct).padStart(3, '0')}%</p>
      </div>
    </div>
  );
};

export default Loader;
