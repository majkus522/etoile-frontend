import "./LengthSelector.css";

const lengths = {
  bracelet: ["16 cm", "18 cm", "20 cm"],
  necklace: ["40 cm", "45 cm", "50 cm"],
};

function LengthSelector({
  selectedType,
  selectedLength,
  setSelectedLength,
  isLengthOpen,
  setIsLengthOpen,
}) {
  const title =
    selectedType === "bracelet"
      ? "DŁUGOŚĆ BRANSOLETKI"
      : "DŁUGOŚĆ NASZYJNIKA";

  return (
    <section className="length-section">
      <div
        className="length-header"
        onClick={() => setIsLengthOpen((prev) => !prev)}
      >
        <span className="length-title">{title}</span>

        <button
          type="button"
          className="length-arrow-button"
          aria-label="Rozwiń lub zwiń"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className={`length-arrow ${
              isLengthOpen ? "" : "length-arrow-closed"
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

      {isLengthOpen && (
        <>
          <div className="length-grid">
            {lengths[selectedType].map((length) => (
              <button
                key={length}
                type="button"
                onClick={() => setSelectedLength(length)}
                className={`length-card ${
                  selectedLength === length ? "length-card-active" : ""
                }`}
              >
                {length}
              </button>
            ))}
          </div>

          <p className="length-description">
            {selectedType === "bracelet"
              ? "16 cm - XS/S | 18 cm - M/L | 20 cm - L/XL"
              : "40 cm - krótki | 45 cm - standardowy | 50 cm - dłuższy"}
          </p>

          <div className="length-bottom-line" />
        </>
      )}
    </section>
  );
}

export default LengthSelector;