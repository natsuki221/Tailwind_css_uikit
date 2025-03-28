'use client';

import React from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button'; // 確保路徑正確

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
  // 如果你要控制是否顯示，可以在父層進行條件渲染
}

const variantClasses: Record<AlertVariant, string> = {
  info:    'bg-[#fff4da] text-gray-900',
  success: 'bg-green-200 text-green-900',
  warning: 'bg-yellow-200 text-yellow-900',
  error:   'bg-red-200 text-red-900',
};

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  className = '',
  children,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {/*
        若你只在父層條件渲染，這裡可以不需要判斷 onClose
        不過若你想當判斷依據，也可寫 onClose !== undefined ?
      */}
      <motion.div
        key="alert"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative inline-block">
          {/* 立體陰影層 */}
          <div className="absolute w-full h-full bg-gray-900 rounded-md translate-x-2 translate-y-2 z-10" />

          {/* 主體 */}
          <div
            className={clsx(
              'relative z-20 border-[3px] border-gray-900 rounded-md px-6 py-4',
              variantClasses[variant],
              className
            )}
          >
            {children}

            {/* 改用 Button 來關閉 */}
            {onClose && (
              <div className="pt-4 flex justify-end">
                <Button onClick={onClose}>
                  關閉
                </Button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;