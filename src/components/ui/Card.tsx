'use client';
import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ children, className = '', ...props }) => {
  return (
    <div className="relative inline-block">
      <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
      <div
        className={clsx(
          'rounded-xl relative z-20 pl-8 sm:pl-10 pr-8 sm:pr-16 py-8 border-[3px] border-gray-900 bg-[#fff4da]',
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
