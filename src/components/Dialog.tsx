import React from 'react';

const Dialog = ({ imageFile }) => {
  return (
    <dialog open>
      <p>Greetings, one and all!</p>
      <img src={imageFile} />
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  );
};

export default Dialog;
