import {useState , useEffect} from 'react';
import axios from 'axios'
import paginate from './paginate'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {

    const [loading,setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProduct = async () => {
        const response = await axios(url);
        const {data} = response;
 
        setData(paginate(data));
        setLoading(false)
    }



    useEffect(() => {
        getProduct();
    },[])

    return {loading,data};
}

