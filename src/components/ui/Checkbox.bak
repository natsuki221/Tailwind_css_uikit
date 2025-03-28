// components/ui/Checkbox.tsx
'use client';
import React from 'react';
import clsx from 'clsx';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, className = '' }) => {
  return (
    <label className={clsx('flex items-center gap-3 cursor-pointer relative', className)}>
      {/* 背景陰影層 */}
      <div className="absolute w-6 h-6 bg-gray-900 rounded-sm translate-x-1 translate-y-1 z-0" />

      {/* 真正的 checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={clsx(
          'relative z-10 appearance-none w-6 h-6 border-[3px] border-gray-900 bg-white rounded-sm',
          'checked:bg-[#4ee197] checked:border-gray-900 checked:shadow-[2px_2px_0_#000]',
          'transition-all duration-200'
        )}
      />

      {label && (
        <span className="text-lg font-medium select-none">{label}</span>
      )}
    </label>
  );
};

export default Checkbox;
