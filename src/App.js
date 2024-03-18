import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Home } from "./Home"
import { Form } from "./Form"


const App = () => {
 
  return (  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza" element={<Form />} />
    </Routes>
  );
};
export default App;
