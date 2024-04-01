import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file

interface WindowsUpdateProps {} // Empty interface for now

const WindowsUpdate: React.FC<WindowsUpdateProps> = () => {
  const [progressCount, setProgressCount] = useState(0);
  const [phase, setPhase] = useState(1);
  const [advice, setAdvice] = useState('Do not turn off your computer.');
  const [status, setStatus] = useState('Configuring Windows Updates');
  const [isBluescreen, setIsBluescreen] = useState(false);

  useEffect(() => {
    const updateInterval = setInterval(() => {
      setAdvice('Do not turn off your computer.');
      setProgressCount(prevCount => Math.min(prevCount + 1, 100)); // Ensure progress doesn't exceed 100

      if (progressCount === 100) {
        if (phase === 1) {
          setPhase(2);
          setStatus('Installing Updates');
          setProgressCount(0);
        } else if (phase === 2) {
          clearInterval(updateInterval);
          setStatus('');
          setProgressCount('');
          setTimeout(() => {
            setIsBluescreen(true);
          }, 1000);
        }
      }
    }, 14830); // Adjust interval as needed

    return () => clearInterval(updateInterval);
  }, [progressCount, phase]);

  return (
    <div style={{ display: 'block', position: 'absolute', minWidth: '100%', minHeight: '100%', margin: 0, padding: 0 }}>
      <div className="progress-container">
        <img src="./images/loading.gif" alt="Loading" style={{ verticalAlign: 'middle', paddingTop: 36.6 + 'px', float: 'left' }} draggable={false} onDragStart={() => false} />
        <a id="status">{status}</a><br />
        <a id="progress">{progressCount}%</a> <span>complete.</span><br />
        <a id="advice">{advice}</a><br />
      </div>
      <div className="footer-image">
        <img src="./images/footer.png" alt="Footer" draggable={false} onDragStart={() => false} />
      </div>

      <div className={isBluescreen ? 'visible' : 'hidden'} id="bluescreen">
        <img className="fullscreen-image" src="./images/bluescreen.png" alt="Bluescreen" />
      </div>
    </div>
  );
};

export default WindowsUpdate;
