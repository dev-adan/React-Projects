import React from 'react';
import Modal from './Modal';
import Quiz from './Quiz'
import './App.css'
import { useGlobalContext } from './context';

const App = () => {
  const {category,difficulty, proceed, data} = useGlobalContext();
  return (
    <>
    {((category && difficulty) && proceed) ? <Quiz/> : <Modal/>}
    
    </>
    
  )
}

export default App;