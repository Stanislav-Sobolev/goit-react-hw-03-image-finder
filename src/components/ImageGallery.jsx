import { ImageGalleryItem } from "./ImageGalleryItem";
import React from 'react';
import * as basicLightbox from 'basiclightbox'



const instance = basicLightbox.create(`
<img src="asd" width="800" height="600">
`)

instance.show()



export const ImageGallery = ({ items, children }) => (

    <ul className="gallery">
        {items.map(el => (
            
            <ImageGalleryItem key={el.id} srcImg={el.webformatURL} altImg={el.tags} bigImg={el.largeImageURL} /> 
            )
        )}
       
        {children}
    </ul>
)





// const handleClick = (ref) => {
//     ref.preventDefault();
//     console.log("object123");
//     console.log('ref :>> ', ref);
//     const instance = basicLightbox.create(`
// <img src=${ref}>
// `)

// instance.show()

// }