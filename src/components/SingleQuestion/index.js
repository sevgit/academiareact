import React from 'react';



const SingleQuestion = (props) => {

    return (
      <div className="singleQuestion">
        <p>{props.question}</p>
        {props.img ? <img src={props.img}/> : null}
        <ul className='singleQuestion'>
        {props.answers.map((value,index) => <li className='option' key={index}>{value}</li>)}
        </ul>
        
      </div>

    );
  }


export default SingleQuestion;
