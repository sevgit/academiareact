import React, { Component } from 'react'

import Main from './containers/Main'
import Header from './components/Header'
import Footer from './components/Footer'

import './index.css'


class App extends Component {
  
  render() {
    
    return (
      <div className="App"> 
        <Header />
        <Main />
        <Footer /> 
      </div>
    );
  }
}

export default App;
