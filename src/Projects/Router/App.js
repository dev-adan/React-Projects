import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product'
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path='/' element={<SharedLayout/>} >
                
            <Route index element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='product' element={<Product/>} />
            <Route path='products/:productId' element={<SingleProduct/>}/>
            <Route path='*' element={<Error/>} />

            </Route>
           
            <Route path='/element' element={<div><h1>Hello</h1></div>} />

        </Routes>
    </BrowserRouter>
  )
}

export default App