import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {Provider} from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';

const saga = createSagaMiddleWare();
const store = configureStore({
  reducer: {},
  middleware: [saga],
}); 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
