// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="area">
      <div className="snake" style={{top:0, left:0}}></div>
      <div className="snake" style={{top:0, left:'2%'}}></div>
      <div className="snake" style={{top:0, left:'4%'}}></div>
    </div>
  );
}

export default App;
