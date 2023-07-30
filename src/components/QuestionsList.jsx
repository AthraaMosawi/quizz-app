
import { useState } from 'react';
import img from '../correctIcon.png'

export default function QuestionsList() {
    const [answersState, setAnswersState] = useState()
    const [answers, setAnswers] = useState([{
        id:1,
        answer: "lablablab",
        correctness: true
      }, 
      {
        id:2,
        answer: "lablablablablablab",
        correctness: false
      },
      {
        id:2,
        answer: "lablablablablablablablablablablablab",
        correctness: false
      }]);

    //   function check(e,ans) {
    //     console.log(ans.correctness);
    //     let color = ans.correctness? 'green': 'red'
    //      e.target.style.backgroundColor = color
    //   }
    function check(e,ans) {
        console.log(ans.correctness);
        setAnswersState(ans.correctness) 
        console.log(answersState);
      }
 

    return(
        <>
          { answers.map((ans,index) => 
                <div onClick={(e)=>check(e,ans)} className="answer">
                     <p key={index}>{ans.answer}</p>
                     {
                        // answersState && answersState === ans.correctness ? "coreceeeeet" : ""
                        // answersState && answersState === ans.correctness ? <p style={{color:"green"}}>correct</p> : ""
                        answersState && answersState === ans.correctness ? <img src={img} /> : ""
                     }
                 </div>)
          }
           
        </>
        
    );
}