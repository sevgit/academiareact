import React from 'react';
import './index.css'


const Header = (props) => {
    let correctAnswers = 0;
    return (
     
      <div className='results'>
     
      <ul>
          {props.answersArray.map((value, index) => 
                    /**/
                     props.questionnaire[index].correctas === value ? 
                     null :
                     <li key={index} className="results__li">
                     {props.questionnaire[index].pregunta} <br /> 
                     <span className="results__correctSpan">Respuesta correcta: </span>
                     <span className="results__correctAnswer">{props.questionnaire[index].respuestas[props.questionnaire[index].correctas]}</span>
                     </li>)}
      </ul>
        
        
        
      </div>

    );
  }


export default Header;
