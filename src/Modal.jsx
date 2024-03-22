import React, { useState } from 'react'; 
import './App.css'
 
const Modal = ({ title, img, opis, price }) => { 
  const [isOpen, setIsOpen] = useState(false); 
 
  const openModal = () => { 
    setIsOpen(true); 
    const cont = document.getElementById('container') 
    cont.style.display='none' 
  }; 
 
  const closeModal = () => { 
    setIsOpen(false); 
 
    const cont = document.getElementById('container') 
    cont.style.display='flex' 
 
  }; 
 
  return ( 
    <div> 
      <div style={{ display: 'flex', padding: '1rem' }} className='container' id='container'> 
        <div className='col'> 
          <img onClick={openModal} src={img} alt={title} /> 
          <p>{opis}</p> 
          <h4>{price}$</h4> 
        </div> 
        <div className='col'> 
          <img onClick={openModal} src={img} alt={title} /> 
          <p>{opis}</p> 
          <h4>{price}$</h4> 
        </div> 
        <div className='col'> 
          <img onClick={openModal} src={img} alt={title} /> 
          <p>{opis}</p> 
          <h4>{price}$</h4> 
        </div> 
      </div> 
 
 
      {isOpen && ( 
        <div className="modal"> 
          <div className="modal-content"> 
            <span className="close" onClick={closeModal}>&times;</span> 
            <img width='300px' src={img} alt={title} /> 
            <h2>{title}</h2> 
            <p>{opis}</p> 
            <h5>{price}$</h5> 
          </div> 
        </div> 
      )} 
    </div> 
  ); 
}; 
 
export default Modal;