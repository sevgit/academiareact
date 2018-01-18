import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addAnswer } from '../../actions/mainActions'
import { bindActionCreators } from 'redux'
import './index.css'

class SingleQuestion extends Component {

  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    
}
handleClick(e, key) {
  
  e.preventDefault()
  this.props.addAnswer(key, this.props.test.step)
}
  render() {
    
      return(
      <div className="singleQuestion">
      
        <p>{this.props.question}</p>
        {this.props.img ? <img src={this.props.img}/> : null}
        
        {this.props.answers.map((value,index) => 
          
          <button className='option' key={index} onClick={(e) => this.handleClick(e, index)}>
            {this.props.correcta === index ? <strong>{value} </strong> : value }
          </button>)}

        
        
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
