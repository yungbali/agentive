import React from 'react';

interface ActionCardProps {
  icon: string;
  title: string;
  bgColor: string;
  iconColor: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ icon, title, bgColor, iconColor }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'watchlist':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1.5L8.79 5.17L12.5 5.82L9.75 8.49L10.58 12.5L7 10.59L3.42 12.5L4.25 8.49L1.5 5.82L5.21 5.17L7 1.5Z"
              stroke={iconColor}
              strokeWidth="2"
            />
          </svg>
        );
      case 'convert':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1.5 1.65H11M12.5 12.35H3" stroke={iconColor} strokeWidth="2" />
          </svg>
        );
      case 'compare':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="5.88" y="1.6" width="6.64" height="7.41" stroke={iconColor} strokeWidth="2" />
            <rect x="1.47" y="5.1" width="6.64" height="7.41" stroke={iconColor} strokeWidth="2" />
          </svg>
        );
      case 'alert':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke={iconColor} strokeWidth="2" />
            <path d="M7 4V7.5" stroke={iconColor} strokeWidth="2" />
            <circle cx="7" cy="10" r="1" fill={iconColor} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-[155px] h-[54px] bg-white/80 rounded-[25px]">
      <div
        className={`absolute w-[32px] h-[32px] left-[11px] top-[11px] ${bgColor} rounded-full 
                      flex items-center justify-center`}
      >
        {renderIcon()}
      </div>
      <div className="absolute left-[53px] top-[calc(50%-21px/2-0.5px)]">
        <span className="font-poppins font-medium text-[14px] leading-[21px] text-[#26273C]">
          {title}
        </span>
      </div>
    </div>
  );
};

export default ActionCard;
