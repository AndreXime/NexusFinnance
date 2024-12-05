'use client';
import { useState, useEffect } from 'react';
import "../../styles/font-awesome/css/all.min.css"
import "../..//styles/dashboard.css"

const PlataformaPage = () => {
const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed(prevState => !prevState);
  };
  

return (
  <main >
    <div className="app">
      <div className={`sidebar ${isSidebarClosed ? 'closed' : ''}`}>
        <button className="btn btn-light close-btn" onClick={toggleSidebar}>
          <i className="fas fa-times"></i>
        </button>
        <a href="#"><i className="fas fa-tachometer-alt"></i> Dashboard</a>
        <a href="#"><i className="fas fa-user"></i> Perfil</a>
        <a href="#"><i className="fas fa-cogs"></i> Configurações</a>
        <a href="#"><i className="fas fa-chart-line"></i> Relatórios</a>
        <a href="#"><i className="fas fa-sign-out-alt"></i> Sair</a>
      </div>

      <div className={`content ${isSidebarClosed ? 'shifted' : ''}`}>
        <h1>Bem-vindo ao Dashboard</h1>
        <p>Este é um exemplo de dashboard responsivo com navegação à esquerda usando Bootstrap e FontAwesome.</p>
      </div>
    </div>
  </main>
  );
};

export default PlataformaPage;
