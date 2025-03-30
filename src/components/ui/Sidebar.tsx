// components/ui/Sidebar.tsx
'use client';
import React from 'react';
import clsx from 'clsx';
import Button from './Button';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={clsx(
        'fixed top-0 left-0 h-screen w-64 p-4 bg-transparent z-50',
        'transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {/* 半透明背景，可點擊關閉 */}
      {/*<div className="absolute inset-0 bg-black/30" onClick={onClose} />*/}

      {/* Sidebar 主體 */}
      <div className="relative z-10 h-full border-[3px] border-gray-900 bg-[#fff4da] rounded-xl flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">選單</h2>
          <Button size="sm" variant="default" onClick={onClose}>
            X
          </Button>
        </div>

        <Button>首頁</Button>
        <Button>設定</Button>
        <Button>關於</Button>
        <Button>登出</Button>
      </div>
    </div>
  );
};

export default Sidebar;
