import { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar.jsx';
import List from './components/List.jsx';

// URL de la API proporcionada por el desafío
const API_URL =
  'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';

export default function App() {
  // Estado: datos crudos de la API
  const [allCoffees, setAllCoffees] = useState([]);
  // Estado: filtro activo ("all" | "available")
  const [activeFilter, setActiveFilter] = useState('all');
  // Estado: carga
  const [loading, setLoading] = useState(true);
  // Estado: error
  const [error, setError] = useState(null);

  // useEffect: efecto secundario — obtiene los datos al montar el componente
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setAllCoffees(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // [] → solo se ejecuta al montar

  // Derivar lista filtrada (sin nuevo estado; solo cálculo)
  const filteredCoffees =
    activeFilter === 'available'
      ? allCoffees.filter((c) => c.available)
      : allCoffees;

  return (
    <div className="app">
      {/* Contenedor principal con recuadro */}
      <div className="content-wrapper">
        {/* Hero */}
        <header className="hero">
          <p className="hero-subtitle">🍵 Nuestra Selección</p>
          <h1 className="hero-title">
            Nuestro Menú de <em>Cafés</em>
          </h1>
          <p className="hero-desc">
            Granos de origen único, tostados con amor. Cada taza es un viaje
            sensorial que empieza con el primer aroma.
          </p>

          {/* FilterBar — Lifting State Up:
              el estado del filtro vive en App y se pasa como prop */}
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </header>

        {/* Contenido principal */}
        <main className="main-content">
          {error ? (
            <div className="error-state">
              <p>Error al cargar los datos: {error}</p>
              <button
                className="retry-btn"
                onClick={() => window.location.reload()}
              >
                Reintentar
              </button>
            </div>
          ) : (
            <List coffees={filteredCoffees} loading={loading} />
          )}
        </main>
      </div>

      <footer className="footer">
        <p>
          {'Realizado por: '}
          <a
            href="https://github.com/JDav117/reto-react-jdor/tree/main/reto-react"
            target="_blank"
            rel="noreferrer"
          >
            Jhoan David Ortega - JDav117
          </a>
        </p>
      </footer>
    </div>
  );
}