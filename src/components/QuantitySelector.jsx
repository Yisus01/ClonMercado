// QuantitySelector.js
import React, { useState } from 'react';


const QuantitySelector = ({ stock = 10 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Cantidad inicial
  
  // Genera las opciones según el stock disponible
  const quantities = Array.from({ length: stock }, (_, i) => i + 1);

  const handleSelect = (quantity) => {
    setSelectedQuantity(quantity);
    setIsOpen(false);
  };

  return (
    <div className="main-grid-izquierda-cantidad-wrapper">
      <label className="main-grid-izquierda-cantidad-label">Cantidad:</label>
      <div className="main-grid-izquierda-cantidad-container">
        <div
          className="main-grid-izquierda-cantidad-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedQuantity} {selectedQuantity === 1 ? 'unidad' : 'unidades'}</span>
          <span className="main-grid-izquierda-cantidad-arrow">▼</span>
        </div>

        {isOpen && (
          <ul className="main-grid-izquierda-cantidad-dropdown">
            {quantities.map((quantity) => (
              <li
                key={quantity}
                className={`main-grid-izquierda-cantidad-option ${
                  selectedQuantity === quantity ? 'selected' : ''
                }`}
                onClick={() => handleSelect(quantity)}
              >
                {quantity} {quantity === 1 ? 'unidad' : 'unidades'}
                {quantity === stock && ` (máximo disponible)`}
              </li>
            ))}
          </ul>
        )}
      </div>
      <span className="main-grid-izquierda-cantidad-stock">
        ({stock} disponibles)
      </span>
    </div>
  );
};

export default QuantitySelector;