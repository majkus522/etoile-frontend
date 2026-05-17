import "./MaterialCard.css";

function MaterialCard({ material, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`creator-card ${isActive ? "creator-card-active" : ""}`}
    >
      <div
        className="creator-circle"
        style={{ background: material.gradient }}
      />

      <span className="creator-name">{material.name}</span>
    </button>
  );
}

export default MaterialCard;