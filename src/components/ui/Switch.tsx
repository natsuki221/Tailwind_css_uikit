// components/ui/Switch.tsx
'use client';
import React from 'react';
import clsx from 'clsx';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, className = '' }) => {
  return (
    <div className={clsx('relative inline-block w-14 h-8', className)}>
      {/* 陰影層 */}
      {/* <div className="absolute inset-0 translate-y-1 translate-x-1 bg-gray-900 rounded-sm z-10" /> */}

      {/* 主按鈕容器 */}
      <button
        type="button"
        aria-checked={checked}
        role="switch"
        onClick={() => onChange(!checked)}
        className={clsx(
          'relative z-20 w-full h-full border-[3px] border-gray-900 transition-colors duration-300 flex items-center px-1',
          'rounded-sm',
          checked ? 'bg-[#FE4A60]' : 'bg-gray-300'
        )}
      >
        <div
          className={clsx(
            'w-5.5 h-5.5 bg-white shadow-[2px_1.5px_0_#000] transition-transform duration-300',
            'rounded-sm',
            checked ? 'translate-x-5' : 'translate-x-0'
          )}
        />
      </button>
    </div>
  );
};

export default Switch;
