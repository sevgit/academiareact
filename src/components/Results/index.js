import React from 'react';
import {testConfig} from '../../utils/config'
import './index.css'


let score = {
  total: 0,
  result: ""
}
function scoreCard(q, a) {
  let scoreCard = 0;
  
 a.map((value,index) => {
  if(q[index].correctas === value) {
    scoreCard = scoreCard +1;
  }
}) 
  score.total = scoreCard;
  score.result = scoreCard >= testConfig.minimumScore ? "APROBADO" : "REPROBADO" ;
}

const Header = (props) => {
  scoreCard(props.questionnaire, props.answersArray)
    return (
      
      <div className='results'>
      <h2>Resultado: <span className={score.result}>{score.result}</span> </h2>
      <p>Correctas: {score.total}/{testConfig.requiredAnswers}</p>
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
