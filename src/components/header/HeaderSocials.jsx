import React from 'react'
import {FaYoutube} from 'react-icons/fa'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://medium.com/@luqmanhal9000" target="_blank" rel="noreferrer"><BsMedium/></a>{/*youtube link with icon*/}
        <a href="https://www.youtube.com/watch?v=QvF5finJxYc" target="_blank" rel="noreferrer"><FaYoutube/></a>{/*medium link with icon*/}
    </div>
  )
}

export default HeaderSocials