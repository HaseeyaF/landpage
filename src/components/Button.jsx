import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button 
      className={`flex p-3 px-5 items-start gap-2 rounded bg-primary-orange text-white font-inter text-sm font-bold leading-[100%] tracking-[-0.28px] uppercase ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
