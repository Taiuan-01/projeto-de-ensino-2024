import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './componentes/Menu/Home';
import About from './componentes/Menu/About';
import Contact from './componentes/Menu/Contact';
import Menu from './componentes/Menu/Menu';

function App() {
  return (
    <Router>
      <div>
        {/* Menu de navegação */}
       <Menu></Menu>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;