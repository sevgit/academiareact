import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setQuestions } from '../../actions/mainActions'
import { bindActionCreators } from 'redux'
import * as firefunctions from '../../utils/firefunctions'
import * as firebase from 'firebase'
import SingleQuestion from '../../components/SingleQuestion'
import Spinner from '../../components/Spinner'
import './index.css'
import Results from '../../components/Results'

import {testConfig} from '../../utils/config'

class Main extends Component {

  
  constructor(props) {
    super(props);    

    
  }

statusCheck() {
  const questionnaire = this.props.test.questionnaire;
  const step = this.props.test.step;

    if (questionnaire.length > 1 && step < testConfig.requiredAnswers) {
      return <SingleQuestion 
                question={questionnaire[step].question.text} 
                options={questionnaire[step].options} 
                img={null} 
                rightAnswer={questionnaire[step].rightAnswer}/>
    } else if (questionnaire.length < 1) {
      return <Spinner />
    } else {
      return <Results answersArray={this.props.test.userAnswers} questionnaire={questionnaire}/>
    }
  }
  componentDidMount() {
    const db = firebase.database();
    const questionnaire = db.ref('questionnaire');
    
    
    firefunctions.fetchQuestions(questionnaire).then(data => this.props.setQuestions(data.val().slice(0,30)))
    
  }
  
  render() {
    
    return (
      <div className="Main">
        {this.statusCheck()}
        
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