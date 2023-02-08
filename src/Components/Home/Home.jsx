import React from 'react'
import About from '../About/About'
import Comment from '../Comment/Comment'
import Contact from '../Contact/Contact'
import Services from '../Services/Services'

const Home = () => {

  return (
    <>
    <section id="hero">
    <div className="hero-container">
      <div data-aos="fade-in">
        <div className="hero-logo">
        </div>

        <h1>Welcome to Textile Company</h1>
        <h2>A good plan violently executed now is better than a perfect plan executed next week.</h2>
        <div className="actions">
          <a href="/About" className="btn-get-started">Get Strated</a>
          <a href="/Services" className="btn-get-started">Our Services</a>
        </div>
      </div>
    </div>
  </section>

  <About/>
  <Services/>
  <Comment/>
  <Contact/>
  </>
  )
  
}

export default Home
