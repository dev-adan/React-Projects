import React, {useEffect} from 'react';
import {FaArrowUp,FaArrowDown} from 'react-icons/fa'

import { useGlobalContext} from './context';


const Main = () => {

  const {products,amount,total,removeProduct,increaseAmount,decreaseAmount,amountCalc,totalCalc} = useGlobalContext();

  useEffect(() => {

    amountCalc()
  },[total,removeProduct,decreaseAmount,increaseAmount])

  useEffect(() => {
   totalCalc()
  },[amount])

  return (
    <div className='main'>
        <h1 className='main-heading'>YOUR BAG</h1>

        <div className='products'>

         {products.map(product => {
          return <div key={product.id} className='single-product'>

             <div className='single-product-left'>

               <div className='image-div'>
                  <img src={product.img} alt='image'/>
               </div>
  
                <div className='single-product-left-details'>
                  <h3 className='product-title'>{product.title}</h3>
                  <p className='product-price'>${product.price}</p>
                  <button  className='product-remove-button' onClick={() => removeProduct(product.id)}>Remove</button>
                </div>

             </div>

             <div className='single-product-right'>

               <i className='single-product-right-item decrease-btn' onClick={() => increaseAmount(product.id)}><FaArrowUp/></i>
               <h3 className='single-product-right-item qty'>{product.amount}</h3>
               <i className='single-product-right-item increase-btn' onClick={() => decreaseAmount(product.id)}><FaArrowDown/></i>

             </div>
             
           </div>
           
         })}

        

        </div>


  <hr className='hr'></hr>



        <div className='total'>
          <div><h1>Total : {total}</h1> </div>
              <h1>$ {amount}.00</h1>
         </div>

        
    </div>
  
  )
}

export default Main