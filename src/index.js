import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Carousel from './components/Carousel';

// const images = [
//   'https://via.placeholder.com/600x400',
//   'https://via.placeholder.com/600x200',
//   'https://via.placeholder.com/600x600',
// ];

// ReactDOM.render(
//   <React.StrictMode>
//     <Carousel images={images} ///////////////>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
