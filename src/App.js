import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from "./Home"

const App = () => {
 
  return (  
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default App;
