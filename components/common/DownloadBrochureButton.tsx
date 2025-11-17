'use client';

import { useModal } from '@/components/providers/ModalProvider';

export function DownloadBrochureButton() {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      className="bg-[#097199] text-white font-bold py-2 px-3 rounded-l-md shadow-lg hover:bg-[#075a7a] transition duration-300 cursor-pointer"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      Download Broucher
    </button>
  );
}

