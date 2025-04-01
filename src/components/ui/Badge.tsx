// components/ui/Badge.tsx
'use client';
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-[#EBDBB7] hover:bg-[#FFC480] text-gray-900',
    success: 'bg-green-200 hover:bg-green-400 text-green-800',
    warning: 'bg-yellow-200 hover:bg-yellow-400 text-yellow-800',
  };
  return <span className={`inline-flux items-center whitespace-nowrap px-2 py-1 rounded transition-colors duration-200 border-[2px] border-gray-900 relative hover:-translate-y-px hover:-translate-x-px ${variants[variant]}`}>{children}</span>;
};

export default Badge;