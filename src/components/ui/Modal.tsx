// components/ui/Modal.tsx
'use client';
import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        {children}
        <div className="text-right mt-4">
          <button onClick={onClose} className="text-blue-600 hover:underline">
            關閉
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;