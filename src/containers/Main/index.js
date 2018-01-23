import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addAnswer, setQuestions } from '../../actions/mainActions'
import { bindActionCreators } from 'redux'
import * as firefunctions from '../../utils/firefunctions'
import * as firebase from 'firebase'
import SingleQuestion from '../../components/SingleQuestion'
import Spinner from '../../components/Spinner'
import './index.css'
import Results from '../../components/Results'
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
    let  questionnaire = this.props.test.questionnaire;
    let step = this.props.test.step;
    return (
      <div className="Main">

        { questionnaire.length > 0 ? <SingleQuestion question={questionnaire[step].pregunta} answers={questionnaire[step].respuestas} img={null} correcta={questionnaire[step].correctas}/>  : <Spinner />}
        <Results answersArray={this.props.test.userAnswers} questionnaire={questionnaire}/>
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