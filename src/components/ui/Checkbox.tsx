// components/ui/Checkbox.tsx
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
    <label className={clsx('flex items-center gap-3 cursor-pointer', className)}>
      {/* 隱藏原生 checkbox，但保留在 DOM 中以確保無障礙性 */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      {/* 自定義的 checkbox 外觀：預設為白底，勾選時完全綠色填滿 */}
      <div
        className={clsx(
          'w-6 h-6 border-[3px] rounded-sm transition-all duration-200',
          'bg-white border-gray-900',
          'peer-checked:bg-green-500 peer-checked:border-green-500'
        )}
      />
      {label && (
        <span className="text-lg font-medium select-none">{label}</span>
      )}
    </label>
  );
};

export default Checkbox;
