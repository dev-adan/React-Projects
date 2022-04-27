import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayout = () => {
  return (
    <>
    <Navbar/>
     
        <section>  
            <Outlet/>
        </section>

    </>
  )
}

export default SharedLayout;