// Modal.js
import React, { useState } from 'react';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <i class="fa-solid fa-circle-exclamation"></i>
                <h2>¡Atención!</h2>
                <p>Este sitio fue creado con fines educativos no es oficial de <br></br>Mercado Libre, puedes utilizar el repositorio libremente <br></br>abajo encontrarás mis redes, gracias.</p>
                <button className="modal-button" onClick={handleClose}>
                    Aceptar
                </button>
            </div>
        </div>
    );
};

export default Modal;


