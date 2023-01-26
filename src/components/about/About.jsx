import React from 'react'
import './about.css'
import ME from '../../assets/mefr.png'
import {BsEmojiWinkFill} from 'react-icons/bs'
import {GiStrongMan} from 'react-icons/gi'
import {GiLuchador} from 'react-icons/gi'

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
          <div className="about__cards">

            <article className='about__card'>
              <BsEmojiWinkFill className='about__icon' />
              <h5>Rizzler</h5>
              <small>Tactical Rizzler</small>
            </article>

            <article className='about__card'>
              <GiStrongMan className='about__icon' />
              <h5>Sigma</h5>
              <small>Legendary Sigma</small>
            </article>

            <article className='about__card'>
              <GiLuchador className='about__icon' />
              <h5>Chad</h5>
              <small>Giga Chad</small>
            </article>

          </div>

          <p>
          Hello, my name is Sakas and I am a tactical rizzler, legendary sigma, and gigachad. I specialize in strategy 
          and analysis, and am able to adapt to any situation quickly and effectively. My physical and mental abilities 
          are at the top of my field, allowing me to be successful in high-pressure environments. I am always looking to 
          push the boundaries and strive for excellence in everything I do.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>    
  )
}

export default About