import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addAnswer } from '../../actions/mainActions'
import { bindActionCreators } from 'redux'
import * as firefunctions from '../../utils/firefunctions'
import * as firebase from 'firebase'
import SingleQuestion from '../../components/SingleQuestion'
import Spinner from '../../components/Spinner'


class Main extends Component {

  constructor() {
    super();
    this.state = {
     preguntas: [],
     step: 0,
     

    }
  }
  
  componentDidMount() {
    const db = firebase.database();
    const preguntas = db.ref('preguntas');
    
    firefunctions.fetchQuestions(preguntas).then(data => this.setState({
      preguntas:data.val().preguntas.slice(0,30)
    }))
    
  }
  
  render() {
    
    return (
      <div className="Main">
        
        { this.state.preguntas.length > 0 ? <SingleQuestion  question={this.state.preguntas[this.state.step].pregunta} answers={this.state.preguntas[this.state.step].respuestas} img={null} correcta={this.state.preguntas[this.state.step].correctas}/> : <Spinner />}
         
      </div>
    );
  }
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
export default connect(mapStateToProps,mapDispatchToProps)(Main);