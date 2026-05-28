import React from "react";

const FavoritesItem = ({ product, onToggleCheck }) => {
	return (
		<div className="fav-item-row">
			<div className="fav-item-left">
				<label className="fav-checkbox-label">
					<input type="checkbox" checked={product.checked} onChange={onToggleCheck} />
					<span className="checkbox-custom"></span>
				</label>

				<div className="fav-item-img-placeholder">
					<div className="img-box">ID: {product.id}</div>
				</div>

				<div className="fav-item-details">
					<h3 className="item-title">{product.title}</h3>
					<p className="seller-info">
						od <span className="seller-name">{product.seller}</span> -{" "}
						<span className="rating">{product.rating}</span>
					</p>
					<div className="super-seller-badge">
						<span className="orange-dot">S</span> Super Sprzedawca
					</div>

					<div className="price-mobile-row">
						<span className="price-text">
							{product.price.toFixed(2).replace(".", ",")} zł
						</span>
						{product.isSmart && <span className="smart-badge">smart</span>}
					</div>

					<p className="delivery-text">{product.delivery}</p>
				</div>
			</div>

			<div className="fav-item-right">
				<div className="price-section">
					<span className="price-text">
						{product.price.toFixed(2).replace(".", ",")} zł
					</span>
					{product.isSmart && <span className="smart-badge">smart</span>}
				</div>
				<div className="actions-section">
					<button className="btn-secondary">INNE OFERTY</button>
					<button className="btn-primary-orange">DODAJ DO KOSZYKA</button>
				</div>
				<button className="more-options-btn">⋮</button>
			</div>
		</div>
	);
};

export default FavoritesItem;
