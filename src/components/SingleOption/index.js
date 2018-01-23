import React from 'react';



const SingleOption = (props) => {
    
    return (
      <button className='option' onClick={props.onClick} >
        {props.option}
      </button>

    );
  }


export default SingleOption;
