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
            
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            
          >
            <i className="fab fa-facebook-f" />
          </button>

        </div>
        Footer
      </footer>
    </div>
  )
}

export default Footer
