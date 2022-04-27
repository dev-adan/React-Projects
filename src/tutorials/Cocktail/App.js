import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

//shared
import SharedLayout from './Components/SharedLayout';

//pages
import Home from './Pages/Home'
import About from './Pages/About'
import SingleCocktail from './Pages/SingleCocktail'
import Error from './Pages/Error'

//Component
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
  
        <Routes>
          <Route path='/' element={<SharedLayout/>} >
            <Route index element={ <Home/>} />
            <Route path='/about' element={ <About/>} />
            <Route path='/cocktail/:id' element={ <SingleCocktail/>} />
            <Route path='*' element={ <Error />} />
            </Route>
        </Routes>

    </BrowserRouter>
  )
}

export default App