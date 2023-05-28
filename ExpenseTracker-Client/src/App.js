import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from './components/Home.js'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home/>} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}
export default App;
