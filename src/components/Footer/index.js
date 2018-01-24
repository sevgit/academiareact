import React from 'react';
import './index.css'


const Footer = (props) => {

    return (
      <div className='footer'>
        <img src='http://academialomas.com.uy/img/logo_pie.png' />
        
        <ul>
            <li>Real de Azúa M.70 S. 6 Solymar Norte - Canelones - Uruguay</li>
            <li>Telefono: <span class="brand">2695 71 34*</span></li>
            <li>Movil: <span class="brand">099 17 23 23</span> -- <span class="brand">095 73 23 23</span></li>
          </ul>
        
      </div>

    );
  }


export default Footer;
