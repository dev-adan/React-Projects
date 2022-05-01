// eslint-disable-next-line
import React,{useState,useReducer, useEffect, useContext, useRef} from 'react';
import axios from 'axios';
import { reducer } from './reducer';
const AppContext = React.createContext();

const initialState  = {
    category : 23,
    difficulty : 'easy',
    proceed : false,
    data : [],
    totalQuestions : 0,
    message : '',

  

    
}


  
const AppProvider = ({children}) => {
    const firstUpdate = useRef(true);

    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(() => {

        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
          }

        fetchData();

    },[state.proceed] )

    const url =`https://opentdb.com/api.php?amount=5&category=${state.category}&difficulty=${state.difficulty}&type=multiple`;

    const  fetchData = async () => {
     
       
       try{
           console.log(url)
            const response  = await axios(url);
            const {data : {results}} = response;

            if(results.length < 1) {
                dispatch({type : 'data_not_recieved'})
            }
            

            dispatch({type : 'got_data', payload : results})
          
                
            
            

       }catch(error){
           console.log(error)
       }
        
        

    }



    const setCategory = (data) => {
       
        dispatch({type :'category' , payload : data})

    }

    const setDifficulty = (data) => {
        
        dispatch({type : 'difficulty', payload : data})
    }

    const setProceed = (data) => {
        
        dispatch({type : 'proceed', payload : data})
    }


    return <AppContext.Provider value={{...state,setCategory,setDifficulty, setProceed}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider,AppContext};