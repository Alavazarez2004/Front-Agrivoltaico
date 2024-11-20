import React from 'react';
import { useNavigate } from 'react-router-dom';
import cerrarsesion from '../assets/cerrarsesion.png';

const Home = () => {
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Elimina el token o cualquier dato de sesión almacenado
    localStorage.removeItem('token'); // O sessionStorage.removeItem('token');
    
    // Redirige al usuario a la página de inicio de sesión
    navigate('/');
  };

  return (
    <div className="relative flex select-none items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Icono de Cerrar Sesión, con el evento onClick */}
      <img src={cerrarsesion} alt="Cerrar Sesion" className="absolute top-4 right-4 h-12 w-12 cursor-pointer" onClick={handleLogout} />
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-indigo-400 animate-pulse">
          Familia Alavazarez Reyes
        </h1>
        <p className="text-lg md:text-2xl font-medium text-gray-300">
          Juntos hasta el fin
        </p>
        <div className="mt-10">
          <button className="px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transform transition-transform hover:scale-105 text-white font-semibold shadow-lg">
            Comenzar historia
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;