import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './Store'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {firebaseConfig} from './utils/config'

import * as firebase from 'firebase'

  
  
  firebase.initializeApp(firebaseConfig)
  
  

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
