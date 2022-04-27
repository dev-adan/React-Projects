import React from 'react';
import image from './2374.jpg'

const Content = () => {
  return (
      <div className='content'>

    
    <div className='left-content'>
        <h1>
            <span className='payments'>Payments</span>
            <span className='infrastructure'>infrastructure</span>
            <span className='internet'>for the internet</span>
        </h1>

        <p>
            Million of companies of all sizes -- from startups to fortune 500s -- use 
            Stripe's software and API'S to accept payments, send payouts, and manage their 
            business online.
        </p>

        <button className='startnow'>Start now</button>

    </div>

    <div className='right-content'>
      <img className='right-image' src={image} alt='image' />

    </div>

    </div>
  )
}

export default Content