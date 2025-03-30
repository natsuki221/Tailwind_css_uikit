// components/ui/Modal.tsx
"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* 防止點擊「白色區域」也觸發 onClose，需 stopPropagation */}
          <motion.div
            className="relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ width: "85vw", height: "60vh" }}
          >
            <div className="relative">
              {/* 陰影層：使視覺產生 3D 位移感 */}
              <div className="absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2 z-10" />

              {/* 實際容器：粗邊框 & 淺色背景 */}
              <div className="relative z-20 p-8 border-[3px] border-gray-900 bg-[#fff4da] rounded-xl w-full h-full overflow-auto">
                {children}
                <div className="text-right mt-4">
                  <Button size="sm" onClick={onClose}>關閉</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
