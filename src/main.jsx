import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from "react-router";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Home from './pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
    </Route>
  </Routes>
  </BrowserRouter>,
)
