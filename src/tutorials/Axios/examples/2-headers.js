import {useState} from 'react';
import axios from 'axios';
const url = 'https://icanhazdadjoke.com/';

const Setup = () => {

  const [jokes,setJokes] = useState('random dad jokes');

  const fetchDadJokes = async () => {
    const response = await axios(url,{
      headers : {
        Accept : 'application/json'
      }
    });
    console.log(response)


    try{

    }catch(error){
      console.log(error.response)
    }


  }

  return (
    <div>
      <button onClick={fetchDadJokes}>Fetch Jokes</button>
      <h1>{jokes}</h1>
    </div>
  )
}

export default Setup