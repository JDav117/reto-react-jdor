export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      {/* Skeleton de imagen */}
      <div className="skeleton-image"></div>

      {/* Skeleton del cuerpo */}
      <div className="skeleton-body">
        {/* Skeleton del encabezado (nombre + precio) */}
        <div className="skeleton-header">
          <div className="skeleton-line skeleton-title"></div>
          <div className="skeleton-line skeleton-price"></div>
        </div>

        {/* Skeleton del footer (rating) */}
        <div className="skeleton-footer">
          <div className="skeleton-line skeleton-rating"></div>
        </div>
      </div>
    </div>
  );
}
