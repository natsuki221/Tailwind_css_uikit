'use client';
import React from 'react';
import clsx from 'clsx';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
}

const Select: React.FC<SelectProps> = ({ value, onChange, options, className = '' }) => {
  return (
    <div className="relative w-full h-full">
      {/* 背景陰影層 */}
      <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0 z-10" />

      {/* 實際選單 */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={clsx(
          'border-[3px] w-full relative z-20 bg-white border-gray-900 text-lg font-medium',
          'focus:outline-none py-3.5 px-6 rounded',
          className
        )}
      >
        <option value="" disabled>
          請選擇一項...
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
