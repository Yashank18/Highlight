import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {Provider} from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import notesReducer from './notesState';

const saga = createSagaMiddleWare();
const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  middleware: [saga],
}); 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
