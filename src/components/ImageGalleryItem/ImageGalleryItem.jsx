import styles from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({srcImg, altImg, bigImg, onOpenModal }) => {

return (

    <li className={styles.ImageGalleryItem}>
        
        <img 
            className={styles.ImageGalleryItemImage}
            src={srcImg} 
            alt={altImg} 
            bigImg={bigImg} 
            onClick={() => onOpenModal(bigImg)}
            />
            

    </li>
)
} 





