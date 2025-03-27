// components/ui/Range.tsx
'use client';
import React, { useEffect, useRef } from 'react';

interface RangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number; // 使用受控 value
}

const Range = React.forwardRef<HTMLInputElement, RangeProps>(
  ({ className = '', min = 0, max = 100, value, onChange, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      const el = inputRef.current;
      if (el) {
        const percent = ((value - Number(min)) / (Number(max) - Number(min))) * 100;
        el.style.background = `linear-gradient(to right, #FE4A60 ${percent}%, #fdf6e3 ${percent}%)`;
      }
    }, [value, min, max]);

    return (
      <div className="relative w-full h-full py-1">
        <input
          ref={(el) => {
            inputRef.current = el;
            if (typeof ref === 'function') ref(el);
            else if (ref && el) (ref as React.MutableRefObject<HTMLInputElement>).current = el;
          }}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className={`
            w-full h-3 rounded-sm appearance-none border-[3px] border-gray-900
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-7
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:rounded-sm
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:border-[3px]
            [&::-webkit-slider-thumb]:border-gray-900
            [&::-webkit-slider-thumb]:shadow-[3px_3px_0_#000]
            ${className}
          `}
          {...props}
        />
      </div>
    );
  }
);

Range.displayName = 'Range';

export default Range;
