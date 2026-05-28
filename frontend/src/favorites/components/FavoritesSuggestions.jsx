import React from "react";

const FavoritesSuggestions = ({ items }) => {
	return (
		<div className="suggestions-section">
			<h2 className="suggestions-heading">Zainspirowane Twoimi ulubionymi</h2>
			<div className="suggestions-grid">
				{items.map((item) => (
					<div key={item.id} className="suggested-card shadow-sm">
						<div className="suggested-img-placeholder">
							<div className="img-box">ID: {item.id}</div>
						</div>
						<div className="suggested-info">
							{item.label && <span className="promo-label">{item.label}</span>}
							<div className="suggested-price-row">
								<span className="s-price">
									{item.price.toFixed(2).replace(".", ",")} zł
								</span>
							</div>
							{item.isSmart && <span className="smart-badge small">smart</span>}
							<p className="suggested-title">{item.title}</p>
							<p className="suggested-delivery">dostawa w sobotę</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FavoritesSuggestions;
