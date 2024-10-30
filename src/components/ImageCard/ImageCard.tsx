import s from "./ImageCard.module.css";
import { ImageCardProps } from "../../types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.listItem}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.listImage}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
