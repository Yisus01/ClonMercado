// Carousel.js
import React, { useState } from 'react';
import producto1 from '../img/producto1.jpg';
import producto2 from '../img/producto2.jpg';
import producto3 from '../img/producto3.jpg';
import suscribete from '../img/suscribete.jpg';
import mercadocredito from '../img/mercadocredito.jpg'
import visa from '../img/visa.jpg'
import mastercard from '../img/mastercard.jpg'
import american from '../img/american.jpg'
import diner from '../img/diner.jpg'
import webpay from '../img/webpay.jpg'
import pcgamer from '../img/pcgamer.jpg'
import audifonos from '../img/audifonos.jpg'
import silla from '../img/silla.jpg'
import microfono from '../img/microfono.jpg'
import QuantitySelector from './QuantitySelector';
 // Asegúrate de crear este archivo para los estilos

const Carousel = () => {
  // La imagen principal inicia con la primera imagen
  const [mainImage, setMainImage] = useState(producto1);

  // Array de imágenes únicas
  const images = [producto1, producto2, producto3];

  // Función para cambiar la imagen principal
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <>
      <main className="main">

        <div className="main-grid">

          <div className="main-grid-derecha">
            <div className="carousel-container">
              {/* Lista de miniaturas a la izquierda */}
              <div className="thumbnail-container">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail ${mainImage === image ? 'active' : ''}`}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>

              {/* Imagen principal */}
              <div className="main-image-container">
                <img src={mainImage} alt="Main product" className="main-image" />
              </div>
            </div>
          </div>

          <div className="main-grid-izquierda">

            <div className="main-grid-izquierda-margen">

              <div className="main-grid-izquierda-vendidos">
                <p>Nuevo | 50 vendidos</p>
                </div>

                <div className="main-grid-izquierda-titulo">
                <h2>Tarjeta De Video Asus Dual Rtx4060-o8g-v2 Rtx4060</h2>
                </div>

                <div className="main-grid-izquierda-estrellas">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <p>72 opiniones</p>
                </div>

                <div className="main-grid-izquierda-valor">
                <h2>$405.173</h2>
                <p>en <span>6 cuotas de $67.529 sin interés</span></p>
                <p>Ver todos los medios de pago</p>
                </div>

                <div className="main-grid-izquierda-envio">
                <p>
                  <i className="fa-solid fa-truck-fast"></i>Llega gratis <span>hoy</span>
                </p>
                <p>Solo en CABA y zonas de GBA Comprando dentro de las próximas 8 h 50 min</p>
                <p>Ver más formas de entrega</p>
                </div>

                <div className="main-grid-izquierda-devolucion">
                <p>
                  <i className="fa-sharp fa-solid fa-rotate-left"></i>Devolución gratis
                </p>
                <p>Tenés 30 días desde que lo recibís.</p>
                <p>Conocer más</p>
                </div>

                <div className="main-grid-izquierda-stock">
                <p>Stock disponible</p>
                </div>

                <QuantitySelector/>

                <div className="main-grid-izquierda-botones">

                  <a href="#">Comprar ahora</a>
                  <a href="#">Agregar al carrito</a>
                  <a href="#">Comprar con mercado crédito</a>

                </div>

                <div className="main-grid-izquierda-botones-compra">

                  <p><i class="fa-solid fa-lock"></i><span>Compra Protegida</span>recibe el producto que esperabas o te devolvemos tu dinero.</p>
                  <p><i class="fa-solid fa-award"></i><span>Mercado Puntos</span>Sumarás 22 puntos.</p>

                </div>

            </div>


              

              <div className="main-grid-izquierda-infovendedor">

                <div className="main-grid-izquierda-infovendedor-h2">
                  <h2>Información sobre el vendedor</h2>
                </div>

                <div className="main-grid-izquierda-infovendedor-locacion">

                  <p><i class="fa-sharp fa-solid fa-location-dot"></i>Ubicación</p>
                  <p>Villa Pueyrredón, Capital Federal</p>

                </div>

                <div className="main-grid-izquierda-infovendedor-platinum">

                  <p><i class="fa-sharp fa-solid fa-medal"></i>MercadoLíder Platinum</p>
                  <p>¡Es uno de los mejores del sitio!</p>
                  <div className="main-grid-izquierda-infovendedor-barra">
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                  </div>


                </div>

                <div className="main-grid-izquierda-infovendedor-datos">

                  <p><h2>347</h2>Ventas en los<br></br> últimos 60 días</p>
                  <p><i class="fa-solid fa-handshake-simple"></i><br></br>Brinda<br></br> buena<br></br> atención</p>
                  <p><i class="fa-regular fa-clock"></i><br></br>Despacha<br></br> sus <br></br>productos a <br></br>tiempo</p> <br></br>
                  <p>Ver más datos de este vendedor</p>

                </div>

              </div>

              <div className="main-grid-izquierda-suscribete">
                  <p>¡Suscribite al nivel 6 con 67% OFF!</p>
                  <img src={suscribete} alt="" />
                  <p>La oferta termina este mes</p>
                  <p>Tu suscripción anual por $ 399/mes incluye <br></br>Disney+, Star+, miles de descuentos en <br></br>compras y ¡mucho más!</p>
                  <a href="#">Suscribete al nivel 6</a>
              </div>

              <div className="main-grid-izquierda-garantia">
                <p>Devolución gratis</p>
                <p>Compra Protegida con Mercado Pago</p>
                <p>Recibí el producto que esperabas o te devolvemos tu dinero</p>
                <a href="#">Conocer más sobre garantía</a>
              </div>

              <div className="main-grid-izquierda-pago">
                
                <div className="main-grid-izquierda-pago-mercado">

                  <p>Medios de pago</p>
                  <p>Hasta 12 cuotas sin tarjeta</p>
                  <img src={mercadocredito} alt="" />

                </div>

                <div className="main-grid-izquierda-pago-credito">


                  <p>Tarjetas de crédito</p>
                  <p>¡Cuotas sin interés con bancos seleccionados!</p>
                  <img src={visa} alt="" />
                  <img src={american} alt="" />
                  <img src={mastercard} alt="" />
                  <img src={diner} alt="" />

                </div>

                <div className="main-grid-izquierda-pago-debito">
                  <p>Tarjetas de débito</p>
                  <img src={webpay} alt="" />
                </div>

                
              </div>

              <div className="main-grid-izquierda-asociados">
                
                <p>Productos promocionados</p>

                <div className="main-grid-izquierda-asociados-1">
                  <img src={pcgamer} alt="" />
                  <p>$1.275.000</p>
                  <p>Pc Gamer</p>
                </div>

                <div className="main-grid-izquierda-asociados-2">
                  <img src={audifonos} alt="" />
                  <p>$175.000</p>
                  <p>Audifonos</p>
                </div>

                <div className="main-grid-izquierda-asociados-3">
                  <img src={silla} alt="" />
                  <p>$375.000</p>
                  <p>Silla Gamer</p>
                </div>

                <div className="main-grid-izquierda-asociados-4">
                  <img src={microfono} alt="" />
                  <p>$75.000</p>
                  <p>Microfono Gamer</p>
                </div>




              </div>

              

          </div>

        </div>

      </main>
    </>
  );
};

export default Carousel;