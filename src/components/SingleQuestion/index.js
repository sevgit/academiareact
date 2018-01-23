import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addAnswer } from '../../actions/mainActions'
import { bindActionCreators } from 'redux'

import SingleOption from '../SingleOption'
import './index.css'

class SingleQuestion extends Component {

  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);

}


handleClick(e, key) {
  e.preventDefault()
  this.props.addAnswer(key, this.props.test.step)
  /* let target = e.target
  let optionList = Object.values(e.target.parentNode.childNodes).splice(e.target)
  let sendAnswer = () => this.props.addAnswer(key, this.props.test.step);
  
  
  optionList.forEach(function (element, i) {
    
    setTimeout(function () {
        
        target === element ? null :element.classList.add("fadeoutleft")
        
    }, i * 200)
  })
 */

}

  render() {
    
      return(
      <div className="singleQuestion">
      
        <p className="singleQuestion__question">{this.props.question}</p>
        {this.props.img ? <img src={this.props.img}/> : null}
        <div className="singleQuestion__optionList">
        {this.props.answers.map((value,index) => 
          
          <SingleOption index={index} option={value} onClick={(e) => this.handleClick(e, index)}  />
          /* <button className='option' key={index} onClick={(e) => this.handleClick(e, index)}>
            {value}
          </button> */
        )}
          </div>
        
        
      </div>

)};
  }


  function mapStateToProps(state) {
    const test = state.userReducer
    
    return {
      test
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      addAnswer: bindActionCreators(addAnswer,dispatch)
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(SingleQuestion);
