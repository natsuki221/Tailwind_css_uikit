// components/ui/Button.tsx
'use client';
import React, { useState } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'cancel';
  onClick?: () => void | Promise<void>;
}

const variantStyles = {
  default: 'bg-[#ffc480] text-gray-900',
  warning: 'bg-[var(--color-red-500)] text-white',
  cancel: 'bg-[var(--color-gray-600)] text-white',
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'default',
  disabled,
  onClick,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const colorClass = variantStyles[variant];

  const handleClick = async () => {
    if (typeof onClick !== 'function') return;
    try {
      setLoading(true);
      await onClick(); // 開發者自己定義 async 行為
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-auto flex-shrink-0 h-full group">
      <div className="w-full h-full rounded bg-gray-800 translate-y-1 translate-x-1 absolute inset-0 z-10"></div>
      <button
        type="button"
        disabled={disabled || loading}
        onClick={handleClick}
        className={clsx(
          'py-3.5 rounded px-6 group-hover:-translate-y-px group-hover:-translate-x-px ease-out duration-300 z-20 relative w-full border-[3px] border-gray-900 font-medium tracking-wide text-lg flex-shrink-0 flex items-center justify-center',
          colorClass,
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
