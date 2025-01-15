import React from 'react'
import logo from '../../assets/images/Logo Recuerdos Mariposa.png'; // Importa la imagen

import "./Footer.scss"
function Footer() {
  return (
    <div>
      <footer>
        <div className='Logo'>
          <img src={logo} alt="Logo Recuerdos Mariposa" />
        </div>
        <div className='BotonRedes'>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            onClick={() => window.open('https://www.facebook.com/RecuerdosRocio', '_blank')}
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            onClick={() => window.open('https://www.instagram.com/recuerdosrocio/', '_blank')}
          >
            <i className="fab fa-instagram" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            onClick={() => window.open('https://wa.me/c/5213331191800', '_blank')}
            
          >
            <i className="fab fa-whatsapp" />
          </button>

        </div>
        Footer
      </footer>
    </div>
  )
}

export default Footer
