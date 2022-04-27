import React, { useState, useContext } from "react";
import data from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [index, setIndex] = useState(null);
  const [place, setPlace] = useState(null);

  const hoverHandler = (e) => {
    let l = [];
    l = data.filter((d) => d.page === e.target.innerHTML);

    if (e.target.innerHTML === l[0].page) {
      //   console.log(l[0].links)
      setIndex(l[0].links);
      setProduct(l[0].page);
    }

    const rect = e.target.getBoundingClientRect();
    let din = (rect.left + rect.right) / 2.5;
    setPlace(din);
  };

  const leaveHandler = () => {
    setIndex(null);
    setProduct(null);
  };

  const Try = (data) => {
    console.log(data);
  };

  return (
    <AppContext.Provider
      value={{ Try, product, index, place, hoverHandler, leaveHandler }}
    >
      {children}
    </AppContext.Provider>
  );
  // return <AppContext.Provider value={leaveHandler123}>{children}</AppContext.Provider>
};

export { AppProvider, AppContext };
