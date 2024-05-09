import React from 'react';
import Image from 'next/image';

const Dialog = ({ imageFile }) => {
  return (
    <dialog open>
      <p>Greetings, one and all!</p>
      <Image src={imageFile} alt={imageFile} />
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  );
};

export default Dialog;
