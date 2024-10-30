import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../../types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id} className={s.listItem}>
          <ImageCard image={image} onClick={() => onClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
