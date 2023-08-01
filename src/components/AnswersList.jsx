
import { useState } from 'react';
import correctIcon from '../correctIcon.png'

export default function AnswersList() {
    const [answersState, setAnswersState] = useState()
    const [answers] = useState([{
        id:1,
        answer: "The constructor is used to allocate memory for an object.",
        correctness: false
      }, 
      {
        id:2,
        answer: "The constructor is a method that is called when an object is created to initialize its state.",
        correctness: true
      },
      {
        id:2,
        answer: "The constructor is used to define class methods and properties.",
        correctness: false
      }]);

    //   function check(e,ans) {
    //     console.log(ans.correctness);
    //     let color = ans.correctness? 'green': 'red'
    //      e.target.style.backgroundColor = color
    //   }
    function check(ans) {
        console.log(ans.correctness);
        setAnswersState(ans.correctness) 
        console.log(answersState);
      }
 

    return(
        <>
          { answers.map((ans,index) => 
                <div onClick={()=>check(ans)} className="answer">
                     <p key={index}>{ans.answer}</p>
                     {
                        // answersState && answersState === ans.correctness ? "coreceeeeet" : ""
                        // answersState && answersState === ans.correctness ? <p style={{color:"green"}}>correct</p> : ""
                        answersState && answersState === ans.correctness ? <img src={correctIcon} /> : ""
                     }
                 </div>)
          }
           
        </>
        
    );
}