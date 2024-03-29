import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing Routes from react-router-dom
import Tickets from './pages/Tickets';
import VendorPage from './pages/VendorPage';
import Partner from './components/Partner';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes> {/* Using Routes as the parent */}
        <Route path="/" element={<Home />} /> {/* Specify the path and element to render */}
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/vendor" element={<VendorPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/vote" element={<Partner />} />
  
      </Routes>
    </Router>
  );
}

export default App;
