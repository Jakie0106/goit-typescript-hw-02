import { useEffect } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
import s from "./ImageModal.module.css";
import { ImageModalProps } from "../../types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, isClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!image) {
    return null;
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClose}
        contentLabel="Example Modal"
        style={customStyles}
        className={s.Modal}
      >
        <img
          className={s.modalImg}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </Modal>
    </div>
  );
};

export default ImageModal;
