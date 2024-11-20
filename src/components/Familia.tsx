import React from 'react';
import { Link } from 'react-router-dom';

import tomate from '../assets/tomate.png';
import lechuga from '../assets/lechuga.png';
import cebolla from '../assets/cebolla.png';
import chile from '../assets/chile.png';

const Home = () => {
  const handleDepartamentosClick = () => {
    history.push('/Departamentos');
  };

  const handleInformesClick = () => {
    history.push('/Informes');
  };

  const handleAlertasClick = () => {
    history.push('/Alertas');
  };

  const handleGraficasClick = () => {
    history.push('/Graficas');
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#D9D9D9] select-none">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-screen-lg mx-auto px-4">
        <Link to="/Departamentos" className="bg-[#1A2038] p-4 text-white text-4xl flex flex-col items-center justify-center h-48 rounded-none">
            <p className="text-lg font-semibold">Tomate</p>
            <img src={tomate} alt="Tomate" className="w-16 h-16 mb-4" />
          </Link>

          <Link to="/Informes" className="bg-[#FFDD95] p-4 text-white text-4xl flex flex-col items-center justify-center h-48 rounded-none">
            <p className="text-lg font-semibold">Lechuga</p>
            <img src={lechuga} alt="Lechuga" className="w-16 h-16 mb-4" />
          </Link>

          <Link to="/Alertas" className="bg-[#F03232] p-4 text-white text-4xl flex flex-col items-center justify-center h-48 rounded-none">
            <p className="text-lg font-semibold">Cebolla</p>
            <img src={cebolla} alt="Cebolla" className="w-16 h-16 mb-4" />
          </Link>

          <Link to="/Graficas" className="bg-[#1A2038] p-4 text-white text-4xl flex flex-col items-center justify-center h-48 rounded-none">
            <p className="text-lg font-semibold">Chile</p>
            <img src={chile} alt="Chile" className="w-16 h-16 mb-4" />
          </Link>
        </div>
    </div>
);
};

export default Home;