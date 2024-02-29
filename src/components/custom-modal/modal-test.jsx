import { useState } from "react";
import "./styles.css";
import { Modal } from "./modal";

export function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="modal-test">
      <button onClick={() => handleToggleModal()}>Open Modal</button>
      {showModal ? (
        <Modal
          handleToggleModal={handleToggleModal}
          body={<div>Customized body</div>}
          header={<div>Customized header</div>}
          footer={<div>Customized footer</div>}
        />
      ) : (
        ""
      )}
    </div>
  );
}
