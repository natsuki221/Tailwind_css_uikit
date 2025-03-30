// components/ui/Footer.tsx
'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-8 mx-4">
      {/* 陰影層 */}
      <div className="absolute inset-0 bg-gray-900 rounded-xl translate-x-2 translate-y-2 z-0" />
      {/* 主體 */}
      <div className="relative z-10 border-[3px] border-gray-900 bg-[#fff4da] rounded-xl px-6 py-4 text-center text-sm text-gray-700">
        © 2025 Natsuki UI Kit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
