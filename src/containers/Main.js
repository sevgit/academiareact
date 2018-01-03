import React, { Component } from 'react';

import * as firefunctions from '../utils/firefunctions'
import * as firebase from 'firebase'


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
    
    this.setState({
      preguntas: firefunctions.fetchQuestions(preguntas)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="Main">
        ASD
      </div>
    );
  }
}

export default Main;