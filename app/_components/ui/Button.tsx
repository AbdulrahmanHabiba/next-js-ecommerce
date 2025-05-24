import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

// Reusable Button component with premium gradient and styling
const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-secondary hover:to-primary transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
