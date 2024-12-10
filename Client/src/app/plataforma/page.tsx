'use client';
import { useState } from 'react';
import '../../styles/font-awesome/css/all.min.css';
import '../..//styles/dashboard.css';
import Config from '../../components/dashboard/Configuracoes';
import Relatorio from '../../components/dashboard/Relatorios';
import Inicio from '../../components/dashboard/Inicio';
import Funcionarios from '../../components/dashboard/Funcionarios';
import Fluxo from '../../components/dashboard/Fluxo';

const PlataformaPage = () => {
  const [activeComponent, setActiveComponent] = useState('Inicio');

  const renderContent = () => {
    switch (activeComponent) {
      case 'Inicio':
        return <Inicio />;
      case 'Funcionarios':
        return <Funcionarios />;
      case 'Relatorios':
        return <Relatorio />;
      case 'Config':
        return <Config />;
      case 'Fluxo':
        return <Fluxo />;
      default:
        return <h1>Componente não encontrado</h1>;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/user/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        window.location.replace('/');
      }
    } catch {}
  };

  return (
    <main>
      <div style={{ display: 'flex' }}>
        <div className={`text-white sidebar `}>
          <h3 className='mx-3 mb-3 fw-bold'>NexusFinnance</h3>
          <a onClick={() => setActiveComponent('Inicio')}>
            <i className='fas fa-tachometer-alt'></i> &nbsp; Inicio
          </a>
          <a onClick={() => setActiveComponent('Funcionarios')}>
            <i className='fas fa-user'></i> &nbsp; Funcionarios
          </a>
          <a onClick={() => setActiveComponent('Fluxo')}>
            <i className='fas fa-cash-register'></i> &nbsp; Fluxo de caixa
          </a>
          <a onClick={() => setActiveComponent('Relatorios')}>
            <i className='fas fa-chart-line'></i> &nbsp; Relatórios
          </a>
          <a onClick={() => setActiveComponent('Config')}>
            <i className='fas fa-cogs'></i> &nbsp; Configurações
          </a>
          <a onClick={() => logout()}>
            <i className='fas fa-sign-out-alt'></i> &nbsp; Sair
          </a>
        </div>

        <main className={`content p-5`}>{renderContent()}</main>
      </div>
    </main>
  );
};

export default PlataformaPage;
