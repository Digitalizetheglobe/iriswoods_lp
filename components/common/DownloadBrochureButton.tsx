'use client';

import { useModal } from '@/components/providers/ModalProvider';

export function DownloadBrochureButton() {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      className="bg-[#584f48] text-white font-bold py-2 px-3 rounded-l-md shadow-lg hover:bg-white hover:text-[#584f48] border border-[#584f48] transition duration-300 cursor-pointer"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      Download Brochure
    </button>
  );
}

