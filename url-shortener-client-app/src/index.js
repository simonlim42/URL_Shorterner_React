import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwcea9V5WHaqfAi6oleW2iDP_u8iGCIO0",
  authDomain: "url-shortener-a330a.firebaseapp.com",
  databaseURL: "https://url-shortener-a330a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "url-shortener-a330a",
  storageBucket: "url-shortener-a330a.appspot.com",
  messagingSenderId: "287169805860",
  appId: "1:287169805860:web:2090d1856effd3b50722b1",
  measurementId: "G-QLJBPNS7LL"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
