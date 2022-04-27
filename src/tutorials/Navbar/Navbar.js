import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, socials } from "./data";
import "./Navbar.css";
import logo from "./logo.svg";

const Navbar = () => {

  const [toggle,setToggle ] = useState(false);

  function checkResize(){
    if(window.innerWidth > 780){
      setToggle(false)
    }
  }

  useEffect( () => {
    window.addEventListener('resize',checkResize)

  })

  return (
    <nav>

      <div className="navbar-container">
        <div className="image">
          <img src={logo} alt="image" />
        </div>

        <div className='hamburger'>
            <a onClick={() => setToggle(!toggle)} href='#'><FaBars/></a>

        </div>

        <div className="links">
          <ul className='links-ul'>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="social">
          <ul className='social-ul'>
           {socials.map(social => <li key={social.id}><a href={social.url}>{social.icon}</a></li>)}
          </ul>
        </div>
      </div>

      {
          toggle && <div className="links-mobile">
          <ul className='links-ul-mobile'>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

      }

      

    </nav>
  );
};

export default Navbar;
