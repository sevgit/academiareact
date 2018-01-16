import React, { Component } from 'react'

import Main from './containers/Main/index.js'
import Header from './components/Header'



class App extends Component {
  
  render() {
   
    return (
      <div className="App">
        <Header />
        <Main /> 
      </div>
    );
  }
}

export default App;
