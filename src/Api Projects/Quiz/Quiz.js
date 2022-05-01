import React from 'react'

const Quiz = () => {
    const [d,setD] = React.useState(false)
    
    const handleClick= () => {
        
        setD(!d)
        
    }
  return (
    <div>
        {d ? <h1>trye</h1> : <h1>false</h1>}

    <button onClick={handleClick}>click here </button>
  </div>
  )
}

export default Quiz