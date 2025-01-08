import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Productos from '../pages/Productos';
import Home from '../pages/Home'; // Asegúrate de que la ruta sea correcta
import Login from '../pages/Login'; // Asegúrate de que este componente exista
import Signup from '../pages/Singup'; // Asegúrate de que este componente exista
import Artes from '../pages/Artes';
const RoutesIndex = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Define tus rutas aquí */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/producto" element={<Productos/>}/>
        <Route path="/artes" element={<Artes/>}/>
      </Routes>
    </>
  );
};

export default RoutesIndex;
