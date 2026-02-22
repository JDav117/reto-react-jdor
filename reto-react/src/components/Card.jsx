export default function Card({ coffee }) {
  const { name, image, price, rating, votes, popular, available } = coffee;

  return (
    <div className={`card ${!available ? 'unavailable' : ''}`}>
      {/* Imagen */}
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="card-image" />

        {/* Tag "Popular" — renderado condicionalmente */}
        {popular && <span className="tag-popular">Popular</span>}
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="card-body">
        {/* Header: nombre y disponibilidad */}
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <span className="card-price">{price}</span>
        </div>

        {/* Footer: rating y votos (o estado "Sin votos" si no hay) */}
        <div className="card-footer">
          {rating !== null ? (
            <div className="card-rating">
              <span className="star">★</span>
              <span className="rating-value">{rating}</span>
              <span className="votes-count">({votes})</span>
            </div>
          ) : (
            <div className="card-rating no-votes">
              <span className="no-votes-text">No hay votos</span>
            </div>
          )}

          {/* Estado de disponibilidad — renderado condicionalmente */}
          {!available && <span className="unavailable-badge">Vendido</span>}
        </div>
      </div>
    </div>
  );
}
