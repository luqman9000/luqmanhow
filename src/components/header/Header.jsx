import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/spme (2).png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>{/*use .container class from index.css.*/}
          <h5>Hello and Assalammualaikum, my name is</h5>{/*class container ni untuk contain component*/}
          <h1>Sakas</h1>
          <h5 className="text-light">and I am a</h5>{/*Guna class text light dekat ayat ni untuk tukar colour font jadi puteh*/}
          <h1 className="text-light">Fuel Shack Developer</h1>
          <CTA /> {/*use component CTA.jsx*/}
          <HeaderSocial />{/*use the header social component(kena import dulu). icon letak kat sini je*/}
          <div className="literally me lol"> 
            <img src={ME} alt="me"/> {/*use image that was imported from ME*/}
            <a href="#contact" className='scroll__down'>Scroll down</a>
          </div>
      </div>       
    </header>
  )
}

export default Header