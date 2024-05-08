'use client';
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, variant, children }) => {
  return (
    <button
      className={`rounded-[16px] border-[2px] border-b-[4px] h-[56px] px-[24px] ${variant === 'primary' ? 'text-white border-[#8981E9]' : 'text-[#437070] border-[#EBEBEB]'}`}
      style={{
        background:
          variant === 'primary'
            ? 'linear-gradient(90deg,#8A82E8,#6156E1 )'
            : 'linear-gradient(90deg,#FAFAFA,#F0F0F0 )'
      }}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
