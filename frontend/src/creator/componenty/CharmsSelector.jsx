import { useState } from "react";
import "./CharmsSelector.css";

function CharmsSelector() {
  const [isCharmsOpen, setIsCharmsOpen] = useState(true);

  return (
    <section className="charms-section">
      <div
        className="charms-header"
        onClick={() => setIsCharmsOpen((prev) => !prev)}
      >
        <span className="charms-title">ZAWIESZKI</span>

        <button
          type="button"
          className="charms-arrow-button"
          aria-label="Rozwiń lub zwiń"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className={`charms-arrow ${
              isCharmsOpen ? "" : "charms-arrow-closed"
            }`}
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

      {isCharmsOpen && (
        <>
          <p className="charms-placeholder">Ilość zawieszek</p>
          <div className="charms-bottom-line" />
        </>
      )}
    </section>
  );
}

export default CharmsSelector;