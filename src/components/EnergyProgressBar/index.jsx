import React from 'react';

const EnergyProgressBar = ({ progress }) => {
  const redPercentage = Math.min(progress, 30);
  const yellowPercentage = Math.max(progress - 30, 0);

  return (
    <div className="relative w-[85px] h-[7px] bg-gray-800 rounded">
      <div
        className={`absolute h-[7px] rounded`}
        style={{
          width: `${redPercentage + yellowPercentage}%`,
          background: `linear-gradient(to right, rgba(161, 26, 240) ${redPercentage}%, rgba(24, 207, 217) ${redPercentage + yellowPercentage}%)`, // Light purple and light blue
        }}
      />

    </div>
  );
};

export default EnergyProgressBar;
