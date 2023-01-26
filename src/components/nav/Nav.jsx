import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {MdContacts} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#') 
  return (
    <div>
        <nav>
            <a href ="#" onClick={()=>setActiveNav('#')}className={activeNav === '#' ? 'active':''}><FaHome/></a> {/*go to the top*/}
            <a href ="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><FaUserAlt/></a>
            <a href ="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><MdContacts/></a>
        </nav>
    </div>
  )
}

export default Nav