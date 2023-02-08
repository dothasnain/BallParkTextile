import React, {useState} from 'react';
import './Navbar.scss'
import {AiFillCloseCircle} from 'react-icons/ai' 
import {TbGridDots} from 'react-icons/tb' 


const Navbar = () => {
   const [active, setActive] = useState('navBar');
   const showNav = () => {
    setActive('navBar activeNavbar')
   }
   const closeNav = () => {
    setActive('navBar')
   }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        {/* Logo */}
        <div className="logoDiv">
          <a href="/" className='logo flex'>
            <h1 style={{color: "#fc5c65"}}>Textile</h1>
          </a>
        </div>

        {/* Navbar Items */}
        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="/" className="navLink">Home</a>
            </li>

            



            <li className="navItem">
              <a href="/About" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="/Services" className="navLink">Services</a>
            </li>

            <li className="navItem">
              <a href="/Customer" className="navLink">Customers</a>
            </li>

            <button className='btn'>
              <a href="/Contact">Contact Us</a>
            </button>
            
          </ul>

          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle  className='icon'/>
          </div>

        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </header>

    </section>  
  )
}

export default Navbar
