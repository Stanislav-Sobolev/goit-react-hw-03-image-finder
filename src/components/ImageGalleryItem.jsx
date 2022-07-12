


export const ImageGalleryItem = ({srcImg, altImg, bigImg}) => {



return (

    <li className="gallery-item">
        <img src={srcImg} alt={altImg} bigImg={bigImg}/>
        {/* <a href={bigImg} onClick={() => handleClick(bigImg)}>
            
        </a> */}
    </li>
)
} 





