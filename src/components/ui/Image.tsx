// components/ui/Image.tsx
'use client';
import React from 'react';

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return (
    <div className="relative inline-block">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 rounded-xl translate-y-2 translate-x-2 z-10" />
      <img
        {...props}
        loading="lazy"
        className="relative z-20 rounded-xl object-cover"
        style={{ height: 'auto', width: 'auto' }}
      />
    </div>
  );
};

export default Image;

