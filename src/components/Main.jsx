
import React, { useState } from 'react';
import producto1 from '../img/producto1.jpg';
import tarjeta4070 from '../img/4070.jpg'
import fps from '../img/fps.jpg'
import envio from '../img/envio.jpg'
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
import CarouselVendedor from './Caruselvendedor';
import ToggleColorButton from './ToggleColorButton';
import Modal from './modal';

 // Asegúrate de crear este archivo para los estilos

const Carousel = () => {
  // La imagen principal inicia con la primera imagen
  const [mainImage, setMainImage] = useState(tarjeta4070);

  // Array de imágenes únicas
  const images = [tarjeta4070, fps, envio];

  // Función para cambiar la imagen principal
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <>
      <Modal/>
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
            
            <div className='caruselvendedor-h2'>
              <h2>Publicaciones del vendedor</h2>
            </div>
            
            <div className='caruselvendedor'>
              <CarouselVendedor/>
            </div>

            <div className='caruselvendedor-p'>
              <p>ver más publicaciones del vendedor</p>
            </div>

            <div className='caracteristicas'>

              <div className='caracteristicas-h2'>
                <h2>Características principales</h2>
              </div>

              <div className='caracteristicas-table'>

                <table class="tabla-horizontal">
                  {/* <thead>
                      <tr>
                          <th>Encabezado 1</th>
                          <th>Encabezado 2</th>
                          <th>Encabezado 3</th>
                          <th>Encabezado 4</th>
                      </tr>
                  </thead> */}
                    <tbody>
                        <tr>
                            <td>Marca</td>
                            <td>Gigabyte</td>
                        </tr>


                        <tr>
                            <td>Modelo</td>
                            <td>4070 Super</td>
                        </tr>


                        <tr>
                            <td>Estado</td>
                            <td>Nuevo</td>
                        </tr>


                        <tr>
                            <td>Memoria</td>
                            <td>12GB</td>
                        </tr>


                        <tr>
                            <td>Importada</td>
                            <td>Sí</td>
                        </tr>


                    </tbody>
                </table>

                <div className='caracteristicas-otras'>
                  
                  <div className='caracteristicas-otras-h2'>
                    <h2>Otras características</h2>
                  </div>

                  <div className='caracteristicas-otras-texto'>
                    <p>Material: <span>Plush</span></p>
                    <p>Es material hipoalergénicoz:<span> No</span></p>
                    <p>Altura x Ancho:<span> 100 cm x  50 cm</span></p>
                  </div>
                    
                </div>

              </div>



            </div>
            
            <div className='descripcion'>
              <h2>Descripción</h2>
              <p>Somos TarjetasPayasos!<br></br> <br></br>
                Vendemos productos Importados, para Minorita y Mayorista.
                La mejor opción para Tarjetas graficas, teclados, Monitores y más!<br></br><br></br>

                --------------------------------------------------<br></br><br></br>
                Envío:<br></br><br></br>

                1, Puedes retirar directo en Nuestro local.(Estamos en la Zona de calle falsa! A metros de la calle Maipu )<br></br>
                2, Mercado Envíos a todo el País<br></br>
                3, Moto Express Flex (Entrega dentro 24hs)<br></br><br></br><br></br>

                Nota: embalamos tu productos sin cargo adicional con todo lo necesario para que llegue en buenas condiciones.<br></br><br></br>

                --------------------------------------------------<br></br>
                <br></br><br></br>Garantia<br></br><br></br>

                - Merdiante Mercado Libre<br></br>
                - Acordar con el vendedor la garantia en el local<br></br><br></br><br></br>

                --------------------------------------------------<br></br><br></br><br></br>
                Horario de atencion:<br></br><br></br>

                - De Lunes a Sábados de 10am - 7pm</p>
                <h2>Preguntas y respuestas</h2>
                <div className='descripcion-preguntasyrespuestas'>
                  <p>Costo y tiempo de envío</p>
                  <p>Devolución gratis</p>
                  <p>Medios de pago y promociones</p>
                  <p>Garantía</p>
                </div>
            </div>

            <div className='preguntalealvendedor'>

              <h2>Preguntale al vendedor</h2>

              <input type="text" placeholder='Escribe tú pregunta...' />
              <p>Preguntar</p>
            </div>

            <div className='preguntas'>
              <h3>Preguntas Recientes</h3>

              <div className='preguntas-caja'>
                <p>Hola que tal, son exactamente iguales a las de la foto que ponen verdad?, saludos.</p>
                <i class="fa-solid fa-arrow-trend-down"></i>
                <p>Hola, Sí ! <span>13/03/2025</span></p>
              </div>

              <div className='preguntas-caja'>
                <p>Hola , cuánto saldría el envío a illapel de la cuarta región ?</p>
                <i class="fa-solid fa-arrow-trend-down"></i>
                <p>Hola! El costo de envío a Illapel, en la cuarta región, es de aproximadamente $15.000. ¿Hay algo más en lo que podamos ayudarte? ¡Saludos! <span>13/03/2025</span></p>

              </div>

              <div className='preguntas-caja'>
                <p>Buenos dias</p>
                <i class="fa-solid fa-arrow-trend-down"></i>
                <p>Hola buenos días en qué lo podemos ayudar saludos <span>13/03/2025</span></p>
              </div>

              <div className='preguntas-caja'>
                <p>¿En cuanto enfriamiento que tal es?</p>
                <i class="fa-solid fa-arrow-trend-down"></i>
                <p>Hola, anda super bien, son dell oem, las mismas que vienen en los equipos alienware
                <span>13/03/2025</span></p>
                <p>Ver todas las preguntas</p>
                <hr />
              </div>

            </div>

            <div className='opiniones'>

              <div className='opiniones-izquierda'>
                
                <div className='opiniones-izquierda-calificaciones'>
                  
                  <div>
                    <h2>4.7</h2>
                  </div>

                  <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star-half-stroke"></i>
                    <p>14 calificaciones</p>
                  </div>

                </div>

                <div className="contenedor-barras">
                  <div className="barra-container">
                      <div className="barra-progreso barra1"><p>5</p><i class="fa-solid fa-star"></i></div>
                  </div>
                  <div className="barra-container">
                      <div className="barra-progreso barra2"><p>4</p><i class="fa-solid fa-star"></i></div>
                  </div>
                  <div className="barra-container">
                      <div className="barra-progreso barra3"><p>3</p><i class="fa-solid fa-star"></i></div>
                  </div>
                  <div className="barra-container">
                      <div className="barra-progreso barra4"><p>2</p><i class="fa-solid fa-star"></i></div>
                  </div>
                  <div className="barra-container">
                      <div className="barra-progreso barra5"><p>1</p><i class="fa-solid fa-star"></i></div>
                  </div>
              </div>
              </div>

              <div className='opiniones-derecha'>

                <div>
                  <h3>Opiniones destacadas</h3>
                  <p>3 comentarios</p>
                </div>

                <div className='opiniones-derecha-item'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <p>Muy bueno por el precio esta super.</p>
                  <span>23 ene. 2024</span>
                  <div className='owoo'>
                    <p>Es util</p>
                    <ToggleColorButton/>
                  </div>
                </div>

                <div className='opiniones-derecha-item'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <p>Muy bueno por el precio esta super.</p>
                  <span>23 ene. 2024</span>
                  <div className='owoo'>
                    <p>Es util</p>
                    <ToggleColorButton/>
                  </div>
                </div>

                <div className='opiniones-derecha-item'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <p>Muy bueno por el precio esta super.</p>
                  <span>23 ene. 2024</span>
                  <div className='owoo'>
                    <p>Es util</p>
                    <ToggleColorButton/>
                  </div>
                  <p>Ver todas las opiniones</p>
                  
                </div>

                
        
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
                <p>Solo en Maipu y zonas de alrededor Comprando dentro de las próximas 8 h 50 min</p>
                <p>Ver más formas de entrega</p>
                </div>

                <div className="main-grid-izquierda-devolucion">
                <p>
                  <i className="fa-sharp fa-solid fa-rotate-left"></i>Devolución gratis
                </p>
                <p>Tienes 30 días desde que lo recibes.</p>
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
                  <p>Calle falsa, Regióm Inexistente</p>

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
                  <p>¡Suscribete al nivel 6 con 67% OFF!</p>
                  <img src={suscribete} alt="" />
                  <p>La oferta termina este mes</p>
                  <p>Tu suscripción anual por $ 8.000/mes incluye <br></br>Disney+, Star+, miles de descuentos en <br></br>compras y ¡mucho más!</p>
                  <a href="#">Suscribete al nivel 6</a>
              </div>

              <div className="main-grid-izquierda-garantia">
                <p>Devolución gratis</p>
                <p>Compra Protegida con Mercado Pago</p>
                <p>Recibe el producto que esperabas o te devolvemos tu dinero</p>
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