
export const ImageGalleryItem = ({srcImg, altImg, bigImg, handleClickImg}) => {



return (

    <li className="gallery-item">
        
        <img src={srcImg} 
            alt={altImg} 
            bigImg={bigImg} 
            onClick={() => handleClickImg(bigImg)}/>

    </li>
)
} 





