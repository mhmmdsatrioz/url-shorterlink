import React from 'react'
import '../Style/Footer.css'
import Logo from '../images/logo-white.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo-footer'>
            <img src={Logo} alt='logo' />
        </div>

        <div className='icon-footer'>
              <a href='https://www.facebook.com/bayu.satrio.718689'>
              <img src={facebook} alt='facebook'/>
                  </a> 
                  <a href='https://www.instagram.com/deif.satrio/'>
                <img src={instagram} alt='facebook'/>
                </a> 

        </div>

    </div>
  )
}

export default Footer