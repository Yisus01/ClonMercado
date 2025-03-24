import React, { useState } from 'react';


const IconToggle = () => {
  const [isBlue, setIsBlue] = useState(false);

  const toggleColor = () => {
    setIsBlue(!isBlue);
  };

  return (
    <i
      className={`fa-regular fa-thumbs-up ${isBlue ? 'blue' : ''}`} 
      onClick={toggleColor}
    />
  );
};

export default IconToggle;
