import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addAnswer, setQuestions } from '../../actions/mainActions'
import { bindActionCreators } from 'redux'
import * as firefunctions from '../../utils/firefunctions'
import * as firebase from 'firebase'
import SingleQuestion from '../../components/SingleQuestion'
import Spinner from '../../components/Spinner'


class Main extends Component {

  constructor(props) {
    super(props);    
  }
  
  componentDidMount() {
    const db = firebase.database();
    const preguntas = db.ref('preguntas');
    
    firefunctions.fetchQuestions(preguntas).then(data => this.props.setQuestions(data.val().preguntas.slice(0,30)))
    
  }
  
  render() {
    console.log(this.props.test)
    return (
      <div className="Main">
        
        { this.props.test.questionnaire.length > 0 ? <SingleQuestion  question={this.props.test.questionnaire[this.props.test.step].pregunta} answers={this.props.test.questionnaire[this.props.test.step].respuestas} img={null} correcta={this.props.test.questionnaire[this.props.test.step].correctas}/> : <Spinner />}
         
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
    setQuestions: bindActionCreators(setQuestions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);