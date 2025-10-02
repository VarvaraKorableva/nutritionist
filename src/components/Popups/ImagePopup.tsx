import React from 'react';
import './Popup.css'
import { FaTimes } from 'react-icons/fa';

type ImagePopupProps = {
  diploma: string;
  onClose: () => void;
  imgPopup: string;
};

function ImagePopup({ diploma, onClose, imgPopup }: ImagePopupProps) {

  function handleClick() {
    onClose()
  }

  return (
    <aside className={`img-popup ${imgPopup? 'img-popup__opened' : ''}`}>
      <div className="img-popup__picture-container">
        <button className="img-popup__close-button" type="button" onClick={handleClick}>
          <FaTimes />
        </button>
        
          <img 
            src={diploma.image}
            alt={diploma.img_name}
            className='img-popup__picture'
          />
        
      </div>
    </aside>
  );
}
  
export default ImagePopup;