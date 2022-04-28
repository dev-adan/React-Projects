import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
const url = "http://www.omdbapi.com/?apikey=193c3f85&s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("batman");

  useEffect(() => {
    fetchData();
  }, [search]);

//   const searchQuery = (query) => {
//       setSearch(query)
    
//   }

  const fetchData = async () => {
      let newUrl = `${url}${search}`
    try {
      const response = await axios(newUrl);
      console.log(response)
      const {
        data: { Search: search },
      } = response;
      if(search){
          setMovies(search);
      }
      
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <AppContext.Provider value={{ movies, loading, /*searchQuery*/ setSearch}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
