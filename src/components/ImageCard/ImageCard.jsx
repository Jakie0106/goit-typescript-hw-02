import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
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
