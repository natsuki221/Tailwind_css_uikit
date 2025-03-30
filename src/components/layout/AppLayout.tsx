// components/layout/AppLayout.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Sidebar from '@/components/ui/Sidebar';
import Footer from '@/components/ui/Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar 控制 Sidebar 的開關 */}
      <Navbar onToggleSidebar={handleToggleSidebar} />

      {/* 主要內容區域 */}
      <main className="pt-24 p-6 space-y-8 overflow-x-hidden">
        {children}
        <Footer />
      </main>

      {/* 動畫遮罩 */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar 固定浮出，z-50 疊在遮罩之上 */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default AppLayout;
