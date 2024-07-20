import styles from "./ImageCard.module.css";

const ImageCard = ({ urls, onImageClick }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.imageCard}
        src={urls.small}
        onClick={() => onImageClick({ urls })}
      />
    </div>
  );
};
export default ImageCard;
