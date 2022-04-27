import { useEffect } from "react";
import axios from "axios";

const url = "https://course-api.com/react-store-products";

const Setup = () => {

    const fetchData = async () => {
      try {
        const response = await axios(url);
        
        const {data}  = response;
        console.log(data)

      } catch (error) {
          console.log(error.response)
      }
    };
  

  useEffect(() => {
      fetchData();
  },[])

  return <div>1-first-request</div>;
};

export default Setup;
