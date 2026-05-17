import "./PriceSummary.css";

function PriceSummary() {
  return (
    <section className="price-summary">
      <h3 className="price-summary-title">
        SZCZEGÓŁY CENY
      </h3>

      <div className="price-summary-row">
        <span>Baza</span>
        <span>800 zł</span>
      </div>

      <div className="price-summary-row">
        <span>Zawieszki</span>
        <span>1600 zł</span>
      </div>

      <div className="price-summary-row">
        <span>Metal</span>
        <span>3800 zł</span>
      </div>

      <div className="price-summary-divider" />

      <div className="price-summary-total">
        <span>Razem</span>
        <span>6200 zł</span>
      </div>
    </section>
  );
}

export default PriceSummary;