// GolfRangeSVG.js

import React from 'react';

const GolfCourseSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 500"
      width="100%"
      height="100%"
    >
      {/* Sky */}
      <rect x="0" y="0" width="1000" height="250" fill="#87CEEB" />
      {/* Sun */}
      <circle cx="800" cy="50" r="40" fill="#FFD700" />
      {/* Clouds */}
      <circle cx="200" cy="80" r="40" fill="#FFFFFF" />
      <circle cx="240" cy="100" r="50" fill="#FFFFFF" />
      <circle cx="300" cy="80" r="40" fill="#FFFFFF" />
      <circle cx="350" cy="120" r="50" fill="#FFFFFF" />
      <circle cx="400" cy="90" r="40" fill="#FFFFFF" />
      {/* Grass */}
      <rect x="0" y="250" width="1000" height="250" fill="#8BC34A" />
      {/* Trees */}
      <circle cx="100" cy="300" r="30" fill="#228B22" />
      <circle cx="150" cy="270" r="40" fill="#228B22" />
      <circle cx="200" cy="310" r="30" fill="#228B22" />
      <circle cx="250" cy="290" r="40" fill="#228B22" />
      <circle cx="300" cy="320" r="30" fill="#228B22" />
      <circle cx="350" cy="290" r="40" fill="#228B22" />
      <circle cx="400" cy="310" r="30" fill="#228B22" />
      <circle cx="450" cy="280" r="40" fill="#228B22" />
      {/* Driving Range */}
      <rect x="100" y="250" width="800" height="200" fill="#FAEBD7" />
      <rect x="180" y="250" width="640" height="200" fill="#C0C0C0" />
      {/* Golf Balls */}
      <circle cx="200" cy="450" r="5" fill="#FFFFFF" />
      <circle cx="220" cy="445" r="5" fill="#FFFFFF" />
      <circle cx="240" cy="448" r="5" fill="#FFFFFF" />
      <circle cx="260" cy="452" r="5" fill="#FFFFFF" />
      <circle cx="280" cy="448" r="5" fill="#FFFFFF" />
      <circle cx="300" cy="445" r="5" fill="#FFFFFF" />
      {/* Golfer */}
      <circle cx="500" cy="400" r="25" fill="#FF4500" /> {/* Head */}
      <rect x="490" y="425" width="20" height="50" fill="#FF4500" /> {/* Body */}
      {/* Arms */}
      <line x1="510" y1="440" x2="540" y2="410" stroke="#FF4500" strokeWidth="3" />
      <line x1="490" y1="440" x2="460" y2="410" stroke="#FF4500" strokeWidth="3" />
      {/* Golf Hat */}
      <rect x="485" y="375" width="30" height="15" fill="#FFFFFF" />
      <circle cx="500" cy="375" r="15" fill="#FFFFFF" />
      {/* Golf Club */}
      <line x1="540" y1="410" x2="560" y2="340" stroke="#000000" strokeWidth="3" />
    </svg>
  );
};

export default GolfCourseSVG;
