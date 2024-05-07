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
      className={`rounded-[16px] border-[2px] border-b-[4px] h-[56px] min-w-[166px] ${variant === 'primary' ? 'text-white border-[#8981E9]' : 'text-gray-700 border-[#EBEBEB]'}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
