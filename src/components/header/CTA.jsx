import React from 'react'
import CV from '../../assets/cv.pdf'

{/*component to create sebaris link which is an another header*/}

const CTA = () => { 
  return (
    
    <div className = 'cta'>
        <a href={CV} download className ='btn btn-primary'>Download CV </a> {/*{CV} is for to give link to the imported cv file*/}
        <a href="#contact" className ='btn btn-primary'>Let's Talk</a> {/*className btn dengan btn-primary ambik dari index.css*/}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className ='btn btn-primary'>Github</a> {/*link test*/}
    </div>
  )
}

export default CTA