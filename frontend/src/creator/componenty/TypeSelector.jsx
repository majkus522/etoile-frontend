import "./TypeSelector.css";

function JewelryTypeSelector({ selectedType, setSelectedType }) {
  const types = [
    { id: "necklace", label: "Naszyjniki" },
    { id: "bracelet", label: "Bransoletki" },
  ];

  return (
    <div className="jewelry-type-selector">
      {types.map((type) => (
        <button
          key={type.id}
          type="button"
          onClick={() => setSelectedType(type.id)}
          className={`jewelry-type-button ${
            selectedType === type.id ? "jewelry-type-button-active" : ""
          }`}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}

export default JewelryTypeSelector;