// components/ui/Image.tsx
'use client';
import React, { useState } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

// 擴展 Next.js 的 Image 屬性
interface ImageProps extends NextImageProps {
  showShadow?: boolean;
}

const Image: React.FC<ImageProps> = (props) => {
  const { 
    alt, 
    src, 
    width, 
    height, 
    showShadow = true,
    priority = true,
    ...rest 
  } = props;

  const [imgSrc, setImgSrc] = useState(src ?? '');

  const handleError = () => {
    setImgSrc('/images/placeholder.jpg');
  };

  return (
    <div className="relative inline-block">
      {showShadow && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 rounded-xl translate-y-2 translate-x-2 z-10" />
      )}
      <NextImage
        alt={alt ?? ''}
        src={imgSrc}
        width={width ? Number(width) : 300}
        height={height ? Number(height) : 200}
        priority={priority} // 傳遞 priority 屬性
        className={`relative z-20 rounded-xl object-cover ${
          !showShadow ? 'border-4 border-gray-900' : ''
        }`}
        onError={handleError}
        {...rest}
      />
    </div>
  );
};

export default Image;