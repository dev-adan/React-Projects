import React,{useContext, useReducer, useEffect} from 'react';
import  reducer  from './reducer';
import data from './data'

const AppContext = React.createContext();

const initialState = {

    loading : false,
    products : data,
    amount : 0,
    total : 0,

}

const AppProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(reducer,initialState);

    const removeProduct = (id) => {
        dispatch({TYPE : 'remove', payload : id})
    }

    const increaseAmount = (id) => {
        dispatch({TYPE : 'increase' , payload : id})
    }

    const decreaseAmount = (id) => {
        dispatch({TYPE : 'decrease', payload : id})
    }

    const amountCalc = () => {
        dispatch({TYPE : 'amount'})
    }

    const totalCalc = () => {
        dispatch({TYPE : 'total'})
    }
    
    return <AppContext.Provider value={{...state,removeProduct,increaseAmount,decreaseAmount,amountCalc,totalCalc}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export  {AppProvider};