import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Books from './Components/Books';
import CreateBooks from './Components/CreateBooks';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/books" element={<Books />} />
      <Route path="/createbooks" element={<CreateBooks />} />
    </Routes>
    
  </React.StrictMode>
  </Router>
);

