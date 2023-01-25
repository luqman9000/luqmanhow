import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <>
    {/*Put all your components here*/}
    <Header />
    <Nav /> {/*Navigation bar*/}
    <About />
    <Blog />
    <Footer/>
    <Contact/>
    </>
  )
}

export default App