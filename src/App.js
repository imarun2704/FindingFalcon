import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Result from './Components/Result';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/result*" element={<Result />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
