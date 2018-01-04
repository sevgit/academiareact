import React, { Component } from 'react';

import * as firefunctions from '../utils/firefunctions'
import * as firebase from 'firebase'
import SingleQuestion from '../components/SingleQuestion'

class Main extends Component {

  constructor() {
    super();
    this.state = {
     preguntas: []
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
    console.log(this.state)
    return (
      <div className="Main">
        { this.state.preguntas.map((val, index) => <SingleQuestion key={index} question={val.pregunta} answers={val.respuestas} img={null} correcta={val.correctas}/>)}
      </div>
    );
  }
}

export default Main;