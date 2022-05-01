import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
    const {setCategory, setDifficulty, setProceed, message} = useGlobalContext();

    const handleSubmit  = (e) => {
        e.preventDefault();
        setProceed(true)
    }

  return (
    <main className='model'>

        <form onSubmit = {handleSubmit}>

            {message && <p style={{color : 'red'}}>Try Again ! change category or difficulty</p>}


             <h1>Setup Quiz</h1>
            <label htmlFor='category'>Category</label>
            <select id="category" onChange={(e) => setCategory(e.target.value)}>

                <option value="history">history</option>
                <option value="politics">politics</option>
                <option value="sports">sports</option>
               
            </select>

            <label htmlFor='difficulty'>difficulty</label>
            <select placeholder='select difficulty' id="difficulty" onChange={(e) => setDifficulty(e.target.value)}>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>

            <button onClick={handleSubmit} className='submit' type='submit'>start</button>
        </form>



    </main>
  )
}

export default Modal