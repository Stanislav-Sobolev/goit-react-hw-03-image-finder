


export const ImageGalleryItem = ({srcImg, altImg, bigImg}) => {


return (

    <li class="gallery-item">
        <img src={srcImg} alt={altImg} bigImg={bigImg}/>
        {/* <a href={bigImg} onClick={() => handleClick(bigImg)}>
            
        </a> */}
    </li>
)
} 





