// components/ui/Image.tsx
'use client';
import React from 'react';
import NextImage from 'next/image';

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const { alt, src, width, height, ...rest } = props;
  
  return (
    <div className="relative inline-block">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 rounded-xl translate-y-2 translate-x-2 z-10" />
      <NextImage
        alt={alt ?? ''}
        src={src ?? ''}
        width={width ? Number(width) : 300}
        height={height ? Number(height) : 200}
        className="relative z-20 rounded-xl object-cover"
        {...rest}
      />
    </div>
  );
};

export default Image;
