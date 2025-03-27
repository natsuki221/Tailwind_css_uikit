// components/ui/Input.tsx
'use client';
import React from 'react';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <div className="relative w-full h-full">
        <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0 z-10"></div>
        <input
          ref={ref}
          className={`border-[3px] w-full relative z-20 bg-gray-50 border-gray-900 placeholder-gray-600 text-lg font-medium focus:outline-none py-3.5 px-6 rounded ${className}`}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
