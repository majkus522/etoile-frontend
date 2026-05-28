import "./PriceSummary.css";

function PriceSummary({ basePrice, charmsPrice, lengthPrice, metalPrice, totalPrice }) {
	return (
		<section className="price-summary">
			<h3 className="price-summary-title">SZCZEGÓŁY CENY</h3>

			<div className="price-summary-row">
				<span>Baza</span>
				<span>{basePrice} zł</span>
			</div>

			<div className="price-summary-row">
				<span>Zawieszki</span>
				<span>{charmsPrice} zł</span>
			</div>

			<div className="price-summary-row">
				<span>Długość</span>
				<span>{lengthPrice ?? 0} zł</span>
			</div>

			<div className="price-summary-row">
				<span>Metal</span>
				<span>{metalPrice} zł</span>
			</div>

			<div className="price-summary-divider" />

			<div className="price-summary-total">
				<span>Razem</span>
				<span>{totalPrice} zł</span>
			</div>
		</section>
	);
}

export default PriceSummary;
