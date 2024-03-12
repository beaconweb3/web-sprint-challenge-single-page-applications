import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const App = () => {
  const style = { margin: '1rem', padding: '0.5rem', border: '2px solid black', display: 'flex', alignItems: 'center'}

  return (
    <BrowserRouter>
      <div id='Title' style={{...style, justifyContent: 'space-between'}}>
        <h1 style={{...style, border: '0'}}>Bloomtech Eats</h1>
          <nav id="navBar" style={{...style, border:'0'}}>
            <Link style={{...style, marginRight: '10px'}} to="/">Home</Link>&nbsp;
            <Link style={{...style}} to="">Help</Link>
          </nav>
      </div>  
      <div id='main' style={style}>
        <h1 style={{...style, margin: '3rem'}}>Your favorite food, delivered while coding</h1>
          <Link style={{...style}} to='/pizza'>Pizza</Link>
      </div>
    </BrowserRouter>
  );
};
export default App;
