'use client';

import { useModal } from '@/components/providers/ModalProvider';

export function MobileStickyCta() {
  const { openModal } = useModal();
  const phoneNumber = '+918378944777';

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex w-full shadow-lg shadow-black/15">
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 bg-[#198038] text-white text-center text-base font-semibold py-3 cursor-pointer hover:brightness-110 transition"
          aria-label="Call now"
        >
          Call Now
        </a>
        <button
          type="button"
          onClick={openModal}
          className="flex-1 bg-[#f5a623] text-white text-center text-base font-semibold py-3 cursor-pointer hover:brightness-110 transition"
          aria-label="Open enquiry form"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
}

