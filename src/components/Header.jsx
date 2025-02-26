import React from 'react'
import logo1 from '../img/logo1.jpg'
import logo2 from '../img/logo2.jpg'
import logo3 from '../img/logo3.jpg'

function Header() {
  return (
    <>


        <header>

            <div className='header1'>

                <div className='header1-flex'>

                    <div className='header1-flex-logo1'>
                        <a href="https://www.mercadolibre.cl/"><img src={logo1}/></a>
                    </div>

                    <div className='header1-flex-buscador'>
                        <input type="text" placeholder='Buscar produdcots, marcas y más...' />
                        <hr/>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div className='header1-flex-logo2'>
                        <a href="https://www.disneyplus.com"><img src={logo2}/></a>
                    </div>



                </div>


            </div>

            <div className='header2'>

                <div className='header2-enviar'>
                    <i class="fa-solid fa-location-dot"></i>
                    <p> <span>Enviar a </span> <br></br> AV.calle falsa 123</p>
                </div>

                <div className='header2-enlaces'>
                    <ul>
                        <li className="menu">
                            <a href="#">Categorías <i class="fa-solid fa-angle-down"></i></a> 
                            <ul className="dropdown">
                                <li><a href="#">Vehiculos</a></li>
                                <li><a href="#">Inmuebles</a></li>
                                <li><a href="#">Supermercado</a></li>
                                <li><a href="#">Hogar y Muebles</a></li>
                                <li><a href="#">Eletrodomésticos</a></li>
                                <li><a href="#">Herramientas</a></li>
                                <li><a href="#">Construcción</a></li>
                                <li><a href="#">Deportes y Fitness</a></li>
                                <li><a href="#">Accesorios para Vehículos</a></li>
                                <li><a href="#">Moda</a></li>
                                <li><a href="#">Juegos y Juguetes</a></li>
                                <li><a href="#">Bebés</a></li>
                                <li><a href="#">Belleza y Cuidado Personal</a></li>
                                <li><a href="#">Salud y Equipamiento Médico</a></li>
                                <li><a href="#">Industrias y Oficinas</a></li>
                                <li><a href="#">Agro</a></li>
                                <li><a href="#">Productos Sustentables</a></li>
                                <li><a href="#">Servicios</a></li>
                                <li><a href="#">Más Vendidos</a></li>
                                <li><a href="#">Tiendas Oficiales</a></li>
                                <li><a href="#">Ver más Categorías</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Historial</a></li>
                        <li><a href="#">Supermercado</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Vender</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>

                </div>

                <div className='header2--cuenta'>

                    <ul>
                        <li><a href="#">Crea Cuenta</a></li>
                        <li><a href="#">Ingresa</a></li>
                        <li><a href="#">Mis Compras</a></li>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </ul>

                </div>

            </div>

            <div className='header3'>

                <div className='header3-banner'>

                    <a href="https://www.disneyplus.com"><img src={logo3}/></a>

                </div>

            </div>

        </header>
    
    
    
    </>
  )
}

export default Header
