// Button.tsx (簡化示例)
'use client';
import React, { useState } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'cancel';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void | Promise<void>;
}

const variantStyles = {
  default: 'bg-[#ffc480] text-gray-900',
  warning: 'bg-[var(--color-red-500)] text-white',
  cancel:  'bg-[var(--color-gray-600)] text-white',
};

const sizeStyles = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-3.5 px-6 text-base',
  lg: 'py-4 px-8 text-xl',
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  disabled,
  onClick,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!onClick) return;
    try {
      setLoading(true);
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative inline-block group">
      {/* 2. 改大陰影位移 (2px 代替 1px) */}
      <div className="absolute inset-0 bg-gray-800 rounded translate-y-1 translate-x-1 z-10" />

      <button
        type="button"
        disabled={disabled || loading}
        onClick={handleClick}
        className={clsx(
          'relative z-20 rounded border-[3px] border-gray-900 font-medium tracking-wide flex items-center justify-center group-hover:-translate-y-px group-hover:-translate-x-px ease-out duration-300',
          variantStyles[variant],
          sizeStyles[size],
          { 'opacity-70 cursor-not-allowed': loading || disabled },
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          children
        )}
      </button>
    </div>
  );
};

export default Button;