import React, { useEffect, useState } from 'react';
import './Cards.css';
import Card from '../Card/Card';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // --- VENTAS (últimas 24h) ---
        const ventasRes = await fetch('http://localhost:4000/ventas-24h');
        if (!ventasRes.ok) throw new Error(`Error en ventas: ${ventasRes.status}`);
        const ventasData = await ventasRes.json();
        console.log("Ventas recibidas:", ventasData);

        const totalVentas = ventasData.reduce((acc, d) => acc + d.total_ventas, 0);

        const ventasCard = {
          title: 'Ventas',
          color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
          },
          barValue: Math.min(100, Math.round((totalVentas / 500000) * 100)), // Meta 500k de ejemplo
          value: totalVentas.toLocaleString('es-CO'),
          png: () => <span>💰</span>,
          serie: [{ name: 'Ventas', data: ventasData.map(d => d.total_ventas) }],
          categories: ventasData.map(d => d.hora)
        };

        // --- GASTOS (últimos 30 días) ---
        const gastosRes = await fetch('http://localhost:4000/gastos-30d');
        if (!gastosRes.ok) throw new Error(`Error en gastos: ${gastosRes.status}`);
        const gastosData = await gastosRes.json();
        console.log("Gastos recibidos:", gastosData);

        const totalGastos = gastosData.reduce((acc, d) => acc + d.total_gasto_cop, 0);

        const gastosCard = {
          title: 'Gastos',
          color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7"
          },
          barValue: Math.min(100, Math.round((totalGastos / 5000000) * 100)), // Meta 5M de ejemplo
          value: totalGastos.toLocaleString('es-CO'),
          png: () => <span>🧾</span>,
          serie: [{ name: 'Gastos', data: gastosData.map(d => d.total_gasto_cop) }],
          categories: gastosData.map(d => d.fecha)
        };

        setCards([ventasCard, gastosCard]);
      } catch (e) {
        console.error("Error cargando datos:", e);
        setError("Error cargando datos del dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="Cards">Cargando datos...</div>;
  if (error) return <div className="Cards">{error}</div>;

  return (
    <div className="Cards">
      {cards.map((card, id) => (
        <div className="parentConteiner" key={id}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            serie={card.serie}
            categories={card.categories}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
