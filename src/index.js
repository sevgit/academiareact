import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase'

  
  let config = {
    apiKey: "AIzaSyDBZolyXfLHcyc24j_rUsPJigvXMmcnnLM",
    authDomain: "academia-lomas.firebaseapp.com",
    databaseURL: "https://academia-lomas.firebaseio.com",
    projectId: "academia-lomas",
    storageBucket: "academia-lomas.appspot.com",
    messagingSenderId: "537654016832"
  };
  firebase.initializeApp(config)
  
  

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
