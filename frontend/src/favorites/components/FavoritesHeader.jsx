import React from "react";

const FavoritesHeader = ({ products, onToggleAll }) => {
	const allChecked = products.length > 0 && products.every((item) => item.checked);

	return (
		<div className="fav-header">
			<div className="tabs-row">
				<button className="tab-btn active">
					Wszystko <span>{products.length}</span>
				</button>
			</div>
			<div className="select-all-bar">
				<label className="fav-checkbox-label">
					<input
						type="checkbox"
						checked={allChecked}
						onChange={(e) => onToggleAll(e.target.checked)}
					/>
					<span className="checkbox-custom"></span>
					<span className="label-text">Wszystko</span>
				</label>
			</div>
		</div>
	);
};

export default FavoritesHeader;
