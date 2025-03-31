// components/ui/Sidebar.tsx
'use client';
import React from 'react';
import clsx from 'clsx';
import Button from './Button';
import Text from './Text';

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
      {/* Sidebar 主體 */}
      <div className="relative z-10 h-full border-[3px] border-gray-900 bg-[#fff4da] rounded-xl flex flex-col p-4">
        {/* 頂部：標題 + 關閉按鈕 */}
        <div className="flex items-center justify-between mb-4">
          <Text variant='title'>選單</Text>
          <Button size="sm" variant="default" onClick={onClose}>
            X
          </Button>
        </div>

        {/* 中間：選單項目，用 flex-1 撐開 */}
        <div className="flex-1 flex flex-col gap-4 mt-4">
          <Button className="w-full">首頁</Button>
          <Button className="w-full">關於</Button>
          <Button className="w-full">聯繫</Button>
          <Button className="w-full">設定</Button>
        </div>

        {/* 底部：登出鈕貼底 */}
        <div className='mb-6 flex flex-col'>
          <Button className="w-full" variant="cancel">
            登出
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
