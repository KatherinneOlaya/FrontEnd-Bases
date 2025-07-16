import React from 'react';
import './MainDash.css';
import Cards from '../Cards/Cards'; // <-- agrega esta línea
import Table from '../Table/Table';

// ...resto del código...
const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
        
        <Table/>
    </div>
  )
}

export default MainDash