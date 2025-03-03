import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Banner from './components/Header/Banner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login'; // Asegúrate de tener un componente Login
import Signup from './pages/Singup'; // Asegúrate de tener un componente Signup
import RoutesIndex from './routes/RoutesIndex';

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <RoutesIndex />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
