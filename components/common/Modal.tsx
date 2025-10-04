// components/common/Modal.tsx
'use client';

import { ReactNode } from 'react';

export function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="relative mb-4">
          <h3 className="text-xl font-bold text-center text-[#097199]">Enquiry Form</h3>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}