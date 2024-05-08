// Modal as a separate component
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import '../styles/MenuModal.css';

function MenuModal({ openModal, closeModal, children, imgsrc }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} className="dialog" onCancel={closeModal}>
      <Image
        src={imgsrc}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'contain' }}
        alt="image"
      />
      <button onClick={closeModal} className="close">
        ×
      </button>
    </dialog>
  );
}

export default MenuModal;
