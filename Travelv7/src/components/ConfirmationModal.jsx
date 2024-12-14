// ConfirmationModal.jsx
import React from "react";
import { Modal, Button } from "flowbite-react";
import { FaTrashAlt } from "react-icons/fa";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  description = "Are you sure you want to delete this data?",
  confirmText = "Yes, I’m sure",
  cancelText = "Cancel",
}) => {
  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <FaTrashAlt className="mx-auto mb-4 h-24 w-24 text-[#EF4444]" />
          <p className="mb-5 text-xl text-[#525252]">{description}</p>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={onConfirm}>
              {confirmText}
            </Button>
            <Button color="gray" onClick={onClose}>
              {cancelText}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;
