import React from 'react';
import './index.css'


const Header = (props) => {

    return (
      <div className='results'>
        {props.answersArray.map((index, value) => index)}
        
        
      </div>

    );
  }


export default Header;
