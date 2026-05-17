import "./MaterialSelector.css";

import { materials } from "../materialsData.js";
import MaterialCard from "./MaterialCard.jsx";

function MaterialSelector({
  selectedMaterial,
  setSelectedMaterial,
  isOpen,
  setIsOpen,
}) {
  return (
    <section className="creator-box">
      <div
        className="creator-header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="creator-section-label">METAL</span>

        <button
          type="button"
          className="creator-arrow-button"
          aria-label="Rozwiń lub zwiń"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.4s ease",
            }}
          >
            <path
              d="M6 15L12 9L18 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <>
          <div className="creator-grid">
            {materials.map((material) => (
              <MaterialCard
                key={material.id}
                material={material}
                isActive={selectedMaterial === material.id}
                onSelect={() => setSelectedMaterial(material.id)}
              />
            ))}
          </div>

          <div className="creator-bottom-line" />
        </>
      )}
    </section>
  );
}

export default MaterialSelector;