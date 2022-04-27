import React, { useState,useContext } from "react";
import { AppContext } from "./context";
import sublinks from "./data";
import data from "./data";

const Navbar = () => {

  const {Try,product,index,place,hoverHandler,leaveHandler} = useContext(AppContext);

  return (
    <>
      <nav className="navbar"   >
        <div className="logo">
          <h1>Stripe</h1>
        </div>

        <div className="links" >
          {sublinks.map((link) => (
            <a  key={Math.random()} onMouseEnter={hoverHandler} className="links-a" href="#">
              {link.page}
            </a>
          ))}
        </div>

        <div className="right-button">
          <button onClick={() => Try('clicked')}>Sign in</button>
        </div>
      </nav>

     {index  && <div style={{left : `${place}px`}}  className='bubble-nav' onMouseLeave={leaveHandler}>
        <h1 className='bubble-nav-heading'>{product}</h1>
        <ul className='bubble-nav-ul'>
          {index.map((d,index) => {
  
            return <li   className='bubble-nav-li' key={index}> <i  className="bubble-nav-li-a" href={d.url} >{d.icon}{d.label}</i></li>;
          })}
        </ul>
      </div>}
    </>
  );
};

export default Navbar;
