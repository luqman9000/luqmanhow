import React from 'react'
import './about.css'
import ME from '../../assets/mefr.png'
import {BsEmojiWinkFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about_cards">
            <article className='about__card'>
              <BsEmojiWinkFill className='about__icon' />
              <h5>Rizzler</h5>
              <small>Ultimate Rizzler</small>
            </article>
            <article className='about__card'>
              <BsEmojiWinkFill className='about__icon' />
              <h5>Rizzler</h5>
              <small>Ultimate Rizzler</small>
            </article>
            <article className='about__card'>
              <BsEmojiWinkFill className='about__icon' />
              <h5>Rizzler</h5>
              <small>Ultimate Rizzler</small>
            </article>
          </div>
        </div>
      </div>
    </section>    
  )
}

export default About