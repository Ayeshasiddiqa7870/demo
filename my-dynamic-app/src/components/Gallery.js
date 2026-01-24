import React from 'react';


import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image5.jpg';
import img5 from '../assets/image1.jpg';
import img6 from '../assets/image2.jpg';
import img7 from '../assets/image3.jpg';
import img8 from '../assets/image5.jpg';
import img9 from '../assets/image1.jpg';
import img10 from '../assets/image2.jpg';
import img11 from '../assets/image3.jpg';
import img12 from '../assets/image5.jpg';
import img13 from '../assets/image1.jpg';
import img14 from '../assets/image2.jpg';
import img15 from '../assets/image3.jpg';
import img16 from '../assets/image5.jpg';

function Gallery() {
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16];
 
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Gallery ${index}`} />
      ))}
    </div>
  );
}

export default Gallery;
