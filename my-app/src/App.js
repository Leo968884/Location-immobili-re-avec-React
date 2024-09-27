import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accommodation from './pages/Accommodation/Accommodation';
import Error from './pages/Error/Error';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='layout-wrapper'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
