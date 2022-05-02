export const reducer = (state,action) => {

    if(action.type==='category'){
        if(action.payload === 'history'){
            return {...state,category : 23}
        }
        if(action.payload === 'politics'){
            return {...state, category : 24}
        }
        if(action.payload === 'sports'){
            return {...state,category : 21}
        }
    }

    if(action.type === 'difficulty'){
        return {...state, difficulty : action.payload}
    }

    if(action.type ==='proceed'){
        return {...state, proceed: true}
    }

    if(action.type ==='got_data'){
    
        return {...state,data : action.payload , totalQuestions : action.payload.length}
    }

    if(action.type === 'data_not_recieved'){
        return {...state,proceed :false, message : 'try again'}
    }

    if(action.type === 'correct_Answer'){
        return {...state,correctAnswers : state.correctAnswers + 1}
    }
    
    return state;

}