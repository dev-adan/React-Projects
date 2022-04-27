import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import {
  FaHeadSideMask,
  FaEnvelopeOpen,
  FaRegAddressCard,
  FaPhoneAlt,
  FaLock,
} from "react-icons/fa";
import { render } from "@testing-library/react";
const url = "https://randomuser.me/api/";
const initialState = {
  image: "",
  name: "",
  gender: "",
  email: "",
  address: "",
  age: "",
  phone: "",
  password: "",
  setFirstvalue: "name",
};

function reducer(state, action) {
  if (action.type === "setData") {
    console.log("running  reducer type");
    const results = action.payload;
    // state.address = results[0].location.city;
    // state.name = `${results[0].name.first} ${results[0].name.last}`;
    // state.email = results[0].email;
    // state.gender = results[0].gender;
    // state.age = results[0].dob.age;
    // state.phone = `+${results[0].phone}`;
    // state.password = results[0].login.password;
    // state.image = results[0].picture.large; 

    let address = results[0].location.city;
    let name = `${results[0].name.first} ${results[0].name.last}`;
    let email = results[0].email;
    let gender = results[0].gender;
    let age = results[0].dob.age;
    let phone = `+${results[0].phone}`;
    let password = results[0].login.password;
    let image = results[0].picture.large; 
    
    return {...state,name,email,address,gender,age,phone,password,image}
  }

  if (action.type === "value") {
    return { ...state, setFirstvalue: action.payload };
  }

  console.log("running reducer ");

  console.log("state", state);

 
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fetch, setFetch] = useState(false);
  // const [firstvalue,setFirstvalue] = useState('name');
  // const [firstanswer,setFirstanswer ] = useState('')

  const [loading,setLoading] = useState(true)

 async function fetchData() {
   setLoading(true)
    console.log("running fetch");
    const response = await axios(url);
    const { results } = response.data;

    console.log("results", results);

    dispatch({ type: "setData", payload: results });
    // setFirstanswer(results[0].name.first)
    setLoading(false)
  };



  useEffect(() => {
    fetchData();
  }, [fetch]);

 
  const handleHover = (data) => {
    dispatch({ type: "value", payload: data });
  };


  return (
    <div className="main-page">
    <div className="container">
      <div className="image-container">
        <img src={state.image} alt={state.name} />
      </div>

      <div className="name-container">
        <h2>
          My {state.setFirstvalue} is
          <span>
            <h1>{state[`${state.setFirstvalue}`]}</h1>
          </span>
        </h2>
      </div>

      <div className="icon-container">
        <ul>
          <li
            onMouseEnter={() => handleHover("name")}
            id="gender"
            name="gender"
          >
            <FaHeadSideMask />
          </li>
          <li
            onMouseEnter={() => handleHover("email")}
            id="email"
            name="email"
          >
            <FaEnvelopeOpen />
          </li>
          <li
            onMouseEnter={() => handleHover("address")}
            id="address"
            name="address"
          >
            <FaRegAddressCard />
          </li>
          <li
            onMouseEnter={() => handleHover("phone")}
            id="phone"
            name="phone"
          >
            <FaPhoneAlt />
          </li>
          <li
            onMouseEnter={() => handleHover("password")}
            id="password"
            name="password"
          >
            <FaLock />
          </li>
        </ul>
      </div>

      <div className="btn-container">
        <button onClick={() => setFetch(prevState => !prevState)} className="btn">
          Random User
        </button>
      </div>
    </div>
  </div>
  )




}
 

export default App;
