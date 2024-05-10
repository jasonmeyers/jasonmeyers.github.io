'use client';
import Image from 'next/image';
import { useState } from 'react';
import '../styles/WorkExample.css';
import Dialog from './Dialog';
import MenuModal from './MenuModal';

function openDialog(img) {
  return <Dialog imageFile={img}></Dialog>;
}

const WorkExample = ({ imagedescription, workImage }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="examplecontainer">
      <a
        href="#"
        onClick={() => {
          setModal(true);
        }}
      >
        <Image
          className="workimage"
          width={200}
          height={150}
          src={workImage}
          alt={workImage}
        />
      </a>
      <MenuModal
        openModal={modal}
        imgsrc={workImage}
        description={imagedescription}
        closeModal={() => setModal(false)}
      ></MenuModal>
    </div>
  );
};

export default WorkExample;
