import React from 'react';
import {FaShoppingBag} from 'react-icons/fa'
import { useGlobalContext } from './context';



const Navbar = () => {
  const {total} = useGlobalContext();
  return (
    <div className='navbar'>
        <div className='navbar-left-content'>
            <h1>UseReducer</h1>
        </div>

        <div className='navbar-right-content'>
            <a href='#'><FaShoppingBag/></a>
            <span className='cart-count'>{total}</span>
        </div>

    </div>
  )
}

export default Navbar