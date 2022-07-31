import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { addPost } from './redux/state';

addPost('hhhhhhhhhhhh');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <App state={state} addPost={addPost} />

  </React.StrictMode>

);
