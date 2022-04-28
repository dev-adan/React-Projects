import React from 'react'

const Movie = ({Title,Year,Type,Poster}) => {
  return (
    
        <div className='single-poster'>
            <div className='image-container'>
                <img src={Poster} alt={Title}/>
            </div>

            <div className='movie-details'>
                <h3>{Title}</h3>
                <h4>{Year}</h4>

            </div>
            
        </div>


    
  )
}

export default Movie