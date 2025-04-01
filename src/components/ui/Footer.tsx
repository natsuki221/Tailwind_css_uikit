// components/ui/Footer.tsx
'use client';
import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-8 mx-4" id='footer'>
      {/* 陰影層 */}
      <div className="absolute inset-0 bg-gray-900 rounded-xl translate-x-2 translate-y-2 z-0" />
      {/* 主體 */}
      <div className="relative flex items-center justify-center z-10 border-[3px] border-gray-900 bg-[#fff4da] rounded-xl px-6 py-4 text-center text-sm text-gray-700 gap-4">
        © 2025 Natsuki UI Kit. All rights reserved.
        <a href="https://github.com/natsuki221/Tailwind_css_uikit" target='blank'><Github /></a>
      </div>
    </footer>
  );
};

export default Footer;
