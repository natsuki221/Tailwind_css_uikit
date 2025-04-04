// components/ui/Button.tsx
'use client';
import React, { useState } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'cancel';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'ico';
  onClick?: () => void | Promise<void>;
}

const variantStyles = {
  default: 'bg-[#ffc480] text-gray-900',
  warning: 'bg-[var(--color-red-500)] text-white',
  cancel:  'bg-[var(--color-gray-600)] text-white',
};

const sizeStyles = {
  xs: 'py-1 px-1 text-xs',
  sm: 'py-2 px-4 text-sm',
  md: 'py-3.5 px-6 text-base',
  lg: 'py-4 px-8 text-xl',
  ico: 'py-2 px-2 text-base',
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
    // 1) 使用 inline-flex + flex-shrink-0，避免父層 flex 擠壓，讓陰影不變形
    <div className="relative inline-flex flex-shrink-0 group">
      {/* 2) 絕對定位陰影層：inset-0 + pointer-events-none，以免干擾點擊 */}
      <div className="absolute inset-0 bg-gray-800 rounded translate-y-1 translate-x-1 z-10 pointer-events-none" />

      {/* 3) 按鈕本體：hover 時上移陰影 */}
      <button
        type="button"
        disabled={disabled || loading}
        onClick={handleClick}
        className={clsx(
          'relative z-20 border-[3px] border-gray-900 rounded font-medium tracking-wide ease-out duration-300 flex items-center justify-center group-hover:-translate-y-px group-hover:-translate-x-px',
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
