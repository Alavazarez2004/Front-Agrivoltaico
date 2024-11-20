import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Home from "./components/Home";
import './index.css';

function App() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Home" element={<Home />} />
        </Routes>
    </Router>
  );
}
  export default App;