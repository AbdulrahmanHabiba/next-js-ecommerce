import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-glass backdrop-blur-lg rounded-3xl shadow-xl border border-primary-dark/30  ${className}`}
    >
      {children}
    </div>
  );
};

export default Card; 