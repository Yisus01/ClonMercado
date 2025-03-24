import React, { useState } from 'react';

import product1 from '../img/pelucheroronoa.jpg';
import product2 from '../img/discossdazul.jpg';
import product3 from '../img/discossdverde.jpg';
import product4 from '../img/pcgamer.jpg';
import product5 from '../img/microfono.jpg';
import product6 from '../img/audifonos.jpg';
import product7 from '../img/mercadocredito.jpg'
import product8 from '../img/mastercard.jpg'
import product9 from '../img/silla.jpg'
import product10 from '../img/mouse.jpg'
import product11 from '../img/procesador.jpg'
import product12 from '../img/gabinete.jpg'

const Carousel = () => {
  const items = [
    { img: product10, price: '$15.000', description: 'Descripción del producto 1' },
    { img: product2, price: '$70.000', description: 'Descripción del producto 2' },
    { img: product3, price: '$80.000', description: 'Descripción del producto 3' },
    { img: product4, price: '$575.000', description: 'Descripción del producto 4' },
    { img: product5, price: '$25.000', description: 'Descripción del producto 5' },
    { img: product6, price: '$12.000', description: 'Descripción del producto 6' },
    { img: product11, price: '$600', description: 'Descripción del producto 7' },
    { img: product12, price: '$600', description: 'Descripción del producto 8' },
    { img: product9, price: '$226.000', description: 'Descripción del producto 9' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + items.length) % items.length);
  };

  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevSlide}>❮</button>
      <div className="caruselvendedor">
        {visibleItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.img} alt={`Producto ${index + 1}`} />
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;
