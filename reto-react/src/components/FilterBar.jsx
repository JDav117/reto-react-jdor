export default function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar">
      <button
        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        Todos los productos
      </button>
      <button
        className={`filter-btn ${activeFilter === 'available' ? 'active' : ''}`}
        onClick={() => onFilterChange('available')}
      >
        Disponibles
      </button>
    </div>
  );
}
