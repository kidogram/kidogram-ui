"use client"
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, variant, children }) => {
  let buttonClasses = 'button ';
  if (variant === 'primary') {
    buttonClasses += 'bg-blue-500 text-white border-[#8981E90]';
  } else if (variant === 'secondary') {
    buttonClasses += 'bg-gray-300 text-gray-700 border-[#EBEBEB]';
  }

  return (
    <button className={`${buttonClasses} rounded-[16px] border-[2px 2px 4px 2px] h-[56px] min-w-[166px]`} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
