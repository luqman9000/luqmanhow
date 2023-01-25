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
            <a href ="#"
            className='active'><FaHome/></a> {/*go to the top*/}
            <a href ="#about"><FaUserAlt/></a>
            <a href ="#contact"><MdContacts/></a>
        </nav>
    </div>
  )
}

export default Nav