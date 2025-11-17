'use client';

import { Modal } from './Modal';
import { EnquiryModalForm } from './EnquiryModalForm';
import { useModal } from '@/components/providers/ModalProvider';

export function GlobalModal() {
  const { isModalOpen, closeModal } = useModal();

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <EnquiryModalForm onSuccess={closeModal} />
    </Modal>
  );
}

