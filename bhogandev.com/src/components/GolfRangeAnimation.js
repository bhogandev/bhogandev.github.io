import React, { useEffect } from 'react';

const GolfRangeAnimation = () => {
  useEffect(() => {
    const container = document.querySelector('.golf-range-container');

    // Create and append golf balls to the container
    for (let i = 0; i < 10; i++) {
      const golfBall = document.createElement('div');
      golfBall.classList.add('golf-ball');
      container.appendChild(golfBall);
    }
  }, []);

  return (
    <div className="golf-range-container">
      {/* Golf range animation will be dynamically added here */}
    </div>
  );
};

export default GolfRangeAnimation;