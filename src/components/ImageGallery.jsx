import { ImageGalleryItem } from "./ImageGalleryItem";
import React from 'react';
import * as basicLightbox from 'basiclightbox'

export const ImageGallery = ({ items, children }) => (

    <ul class="gallery">
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