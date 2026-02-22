export default function Card({ coffee }) {
  const { name, image, price, rating, votes, popular, available } = coffee;

  return (
    <div className={`card ${!available ? 'unavailable' : ''}`}>
      {/* Imagen */}
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="card-image" />

        {/* Tag "Popular" */}
        {popular && <span className="tag-popular">Popular</span>}
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="card-body">
        {/* Header: nombre y precio */}
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <span className="card-price">{price}</span>
        </div>

        {/* Footer: rating + sold out condicionalmente */}
        <div className="card-footer">
          {rating !== null ? (
            <div className="card-rating">
              <img src="/assets/icons/Star_fill.svg" alt="rating" className="star-icon" />
              <span className="rating-value">{rating}</span>
              <span className="votes-count">({votes})</span>
            </div>
          ) : (
            <div className="card-rating no-votes">
              <img src="/assets/icons/Star.svg" alt="no rating" className="star-icon star-empty" />
              <span className="no-rating">Sin calificaciones</span>
            </div>
          )}

          {/* Disponibilidad */}
          <span className={available ? 'available-text' : 'sold-out-text'}>
            {available ? 'Disponible' : 'No disponible'}
          </span>
        </div>
      </div>
    </div>
  );
}
