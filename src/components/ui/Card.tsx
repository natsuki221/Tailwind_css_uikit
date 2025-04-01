// components/ui/Card.tsx
'use client';
import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 是否顯示 3D 陰影層 */
  shadow?: boolean;
}

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  className = '',
  shadow = true,
  ...props
}) => {
  return (
    <div className="relative inline-block">
      {/* 只有在 shadow = true 時，才顯示絕對定位的灰色陰影層 */}
      {shadow && (
        <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2" />
      )}

      <div
        className={clsx(
          'rounded-xl relative z-20 pl-8 sm:pl-10 pr-8 sm:pr-10 py-8 border-[3px] border-gray-900 bg-[#fff4da]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
