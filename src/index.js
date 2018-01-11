import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './Store'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'


import * as firebase from 'firebase'

  
  let config = {
    authDomain: "academia-lomas.firebaseapp.com",
    apiKey: "AIzaSyDBZolyXfLHcyc24j_rUsPJigvXMmcnnLM",
    databaseURL: "https://academia-lomas.firebaseio.com",
    projectId: "academia-lomas",
    storageBucket: "academia-lomas.appspot.com",
    messagingSenderId: "537654016832"
  };
  firebase.initializeApp(config)
  
  

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
