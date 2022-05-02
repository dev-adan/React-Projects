import React from 'react';
import { useGlobalContext } from './context';

const Quiz = () => {

  const [index,setIndex] = React.useState(0);
  const [result,setResult] = React.useState(null);
  const [percentage,setPercentage] = React.useState(null);
  let quiz_questions;
  const {data,totalQuestions ,correctAnswers , correctAnswerHandler} = useGlobalContext();

  console.log('total',totalQuestions,correctAnswers)

   if(data.length > 1){
      quiz_questions = [...data[index].incorrect_answers,data[index].correct_answer];
         quiz_questions = quiz_questions.sort(() => (Math.random() > .5) ? 1 : -1); 
   }else{
     return;
   }

   const handleQuestions = () => {
    if(index < data.length - 1){
      console.log(index,data.length)
      setIndex(prevIndex => prevIndex + 1)
    }else{
      let per = ( correctAnswers / totalQuestions   ) * 100;
        setPercentage(per);
         setResult(true);
    }
   }

   const retakeHandler = () => {
    window.location.reload(false);
   }

   const handleAnswer = (e) => {
     
    if(e.target.textContent === data[index].correct_answer){
      correctAnswerHandler();
      handleQuestions();

    }else{
      handleQuestions();
    }

   }
  
  if(!result){
    return (
    <div className='quiz-page'>
      <div className='quiz-container'>
        <p>Correct Answers : {correctAnswers}/{totalQuestions}</p>
            <div className='questions'>
              <h1>{data[index].question}</h1>
              <ul>
                <button onClick={handleAnswer}><li>{quiz_questions[0]}</li></button>   
                <button onClick={handleAnswer}><li>{quiz_questions[1]}</li></button>  
                <button onClick={handleAnswer}><li>{quiz_questions[2]}</li></button>
                <button onClick={handleAnswer}><li>{quiz_questions[3]}</li></button>
              </ul>
              <button className='next' onClick={handleQuestions}>Next question</button>
            </div>
      </div>
       
  </div>)
  }else{
    return (
    <div style={{marginTop : '7rem'}}>
        <h1 style={{textAlign : 'center', fontSize : '3rem'}}>Result</h1>
        <p style={{textAlign : 'center', color : 'green',fontSize : '3rem'}}>You got {percentage} percent of answers right....</p>

        <div style={{textAlign : 'center', display:'block',marginTop : '4rem'}}>
          <button onClick={retakeHandler} style={{padding : '2rem 4rem', fontSize : '2rem'}}>Re-take</button>
        </div>
        

    </div>
    )
  }



}

export default Quiz