import Card from './Card.jsx';
import SkeletonCard from './SkeletonCard.jsx';

export default function List({ coffees, loading }) {
  // Mostrar skeletons mientras carga
  if (loading) {
    return (
      <div className="coffee-grid">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  // Empty state: si no hay cafés después de filtrar
  if (coffees.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-content">
          <p className="empty-state-icon">☕</p>
          <h2>No hay productos disponibles</h2>
          <p>
            Intenta cambiar el filtro o vuelve más tarde para ver más opciones.
          </p>
        </div>
      </div>
    );
  }

  // Renderizar la lista de cafés
  return (
    <div className="coffee-grid">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}
