import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  bgColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, bgColor }) => {
  const ArrowUpIcon = () => (
    <svg 
      width="12" 
      height="12" 
      viewBox="0 0 12 12" 
      fill="none" 
      className="mr-1"
    >
      <rect 
        width="4.53" 
        height="4.53" 
        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 6.21094 4.26001)" 
        stroke="#5FC88F" 
        strokeWidth="2"
      />
    </svg>
  );

  const ArrowDownIcon = () => (
    <svg 
      width="12" 
      height="12" 
      viewBox="0 0 12 12" 
      fill="none" 
      className="mr-1"
    >
      <rect 
        width="4.53" 
        height="4.53" 
        transform="matrix(0.707107 0.707107 0.707107 -0.707107 6.21094 7.67001)" 
        stroke="#FF6464" 
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <div className="w-[201px] h-[200px] bg-white/80 rounded-[25px] relative">
      {/* Icon Container */}
      <div className={`w-[50px] h-[50px] ${bgColor} rounded-full absolute left-[20px] top-[28px]`} />
      
      {/* Content Container */}
      <div className="absolute left-[20px] bottom-[31px]">
        <div className="flex items-center mb-[10px]">
          <span className="font-poppins font-semibold text-[14px] text-[#9395A4]">
            {title}
          </span>
          <div className="flex items-center ml-[15px]">
            {change >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
            <span className="font-poppins font-medium text-[14px] text-[#9395A4]">
              {Math.abs(change)}%
            </span>
          </div>
        </div>
        <span className="font-poppins font-medium text-[20px] leading-[30px] text-[#26273C]">
          ${value}
        </span>
      </div>
    </div>
  );
};

export default StatsCard; 