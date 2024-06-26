'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import '../styles/MenuModal.css';

function MenuModal({ openModal, closeModal, imgsrc, description }) {
  const ref = useRef<HTMLDialogElement>();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
      ref.current?.showModal();
    } else {
      ref.current?.close();
      document.body.style.overflow = 'unset';
    }
  }, [openModal]);

  return (
    <dialog ref={ref} className="dialog" onCancel={closeModal}>
      <Image
        src={imgsrc}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'contain' }}
        alt={description}
      />
      {description && <div className="description">{description}</div>}
      <button onClick={closeModal} className="close">
        ×
      </button>
    </dialog>
  );
}

export default MenuModal;
