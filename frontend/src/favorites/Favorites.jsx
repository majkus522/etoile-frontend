import "../App.css";
import { useState } from "react";
import "./Favorites.css";

import FavoritesHeader from "./components/FavoritesHeader.jsx";
import FavoritesItem from "./components/FavoritesItem.jsx";
import FavoritesSuggestions from "./components/FavoritesSuggestions.jsx";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { useTitle } from "../main.jsx";

function Favorites() {
	const [products, setProducts] = useState([
		{
			id: 1,
			title: "BRANSOLETKA SŁOŃCE 45 CM ŻÓŁTE ZŁOTO",
			price: 6200,
			seller: "Etoile_Jewelry",
			checked: true,
		},
		{
			id: 2,
			title: "PIERŚCIONEK DIAMENTOWY 585",
			price: 3500,
			seller: "Etoile_Jewelry",
			checked: true,
		},
	]);

	const suggestedProducts = [
		{ id: 101, title: "NASZYJNIK KONICZYNA 40 PLATYNA", price: 5000 },
		{ id: 102, title: "BRANSOLETKA KRZYŻ 20 CM ŻÓŁTE ZŁOTO", price: 6600 },
		{ id: 103, title: "NASZYJNIK GWIAZDKA 30 CM SREBRO", price: 2700 },
		{ id: 104, title: "NASZYJNIK SERCE 45 CM RÓŻOWE ZŁOTO", price: 8000 },
	];

	const handleToggleCheck = (id) => {
		setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, checked: !p.checked } : p)));
	};

	const handleToggleAll = (isChecked) => {
		setProducts((prev) => prev.map((p) => ({ ...p, checked: isChecked })));
	};

	const handleRemoveSelected = () => {
		setProducts((prev) => prev.filter((p) => !p.checked));
	};

	const handleAddSelectedToCart = () => {
		const selected = products.filter((p) => p.checked);
		console.log("Dodawanie do koszyka:", selected);
		// Tutaj logika dodawania do globalnego koszyka aplikacji
	};

	const checkedCount = products.filter((p) => p.checked).length;

	useTitle("Etoile - Ulubione");

	return (
		<div className="app-container">
			<Navbar />
			<div className="fav-page-container">
				<div className="fav-layout">
					<div className="fav-main">
						<h1 className="fav-heading">Ulubione</h1>
						<div className="fav-white-card fav-shadow">
							<FavoritesHeader
								products={products}
								onToggleAll={handleToggleAll}
								onRemoveSelected={handleRemoveSelected}
							/>
							<div className="fav-delivery-section">
								{products.map((item) => (
									<FavoritesItem
										key={item.id}
										product={item}
										onToggleCheck={() => handleToggleCheck(item.id)}
									/>
								))}
							</div>

							{/* Przywrócony dolny pasek akcji grupowej */}
							{checkedCount > 0 && (
								<div className="fav-bottom-bar">
									<span className="fav-bottom-count">
										Zaznaczono: <strong>{checkedCount}</strong>{" "}
										{checkedCount === 1
											? "produkt"
											: checkedCount < 5
												? "produkty"
												: "produktów"}
									</span>
									<button
										className="fav-btn-etoile fav-navy"
										onClick={handleAddSelectedToCart}>
										DODAJ ZAZNACZONE DO KOSZYKA
									</button>
								</div>
							)}
						</div>

						<h2 className="fav-upsell-heading">Zainspirowane Twoimi ulubionymi</h2>
						<div className="fav-upsell-grid">
							{suggestedProducts.map((item) => (
								<FavoritesSuggestions key={item.id} product={item} />
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Favorites;
