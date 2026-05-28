import "../App.css";
import { useState } from "react";
import "./Favorites.css";

import FavoritesHeader from "./components/FavoritesHeader.jsx";
import FavoritesItem from "./components/FavoritesItem.jsx";
import FavoritesSuggestions from "./components/FavoritesSuggestions.jsx";
import FavoritesStickyBar from "./components/FavoritesStickyBar.jsx";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useTitle } from "../main.jsx";

function Favorites() {
	// State for saved products (English keys, values from your screenshot)
	const [products, setProducts] = useState([
		{
			id: 1,
			title: "Laptop Fujitsu LIFEBOOK U772 (4225)",
			price: 45.0,
			seller: "PHOTOSMART2",
			rating: "99.8%",
			checked: true,
			isSmart: true,
			delivery: "dostawa w sobotę",
		},
		{
			id: 2,
			title: "Fujitsu | 15-stka | i5 -8Gen | Quad | 4 x 3,9GHz | 16GB | 512GB | W11",
			price: 1292.0,
			seller: "nexit24",
			rating: "99.7%",
			checked: true,
			isSmart: true,
			delivery: "dostawa w sobotę",
		},
	]);

	// Data for "Zainspirowane Twoimi ulubionymi" section
	const suggestedProducts = [
		{
			id: 101,
			title: "Dotykowy Dell Latitude E7250 i5-5300U 1920x1080",
			price: 45.0,
			isSmart: true,
		},
		{
			id: 102,
			title: "Fujitsu 7410 | i5-10Gen | 4x4,20GHz | 16GB | 256GB | GeForce Now",
			price: 1092.0,
			isSmart: true,
		},
		{
			id: 103,
			title: "LAPTOP Prowise 11.6 ProLine Chromebook 32GB/2GB",
			price: 62.91,
			isSmart: true,
			label: "zestaw 2 sztuki",
		},
		{ id: 104, title: "Laptop Toshiba NB500 (4094)", price: 60.0, isSmart: true },
		{
			id: 105,
			title: "laptop FujitsuSiemens AMILO Pro v3505 #700B",
			price: 35.0,
			isSmart: false,
		},
		{
			id: 106,
			title: 'CHROMEBOOK LENOVO N22 | N3050 16GB | 11,6" | WIFI BT',
			price: 65.0,
			isSmart: true,
		},
		{
			id: 107,
			title: "Lenovo ThinkPad T450 | i5-4200U Brak RAM i dysku",
			price: 60.0,
			isSmart: true,
		},
	];

	// Handle single item checkbox change
	const handleToggleCheck = (id) => {
		setProducts((prev) =>
			prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
		);
	};

	// Handle "select all" checkbox change
	const handleToggleAll = (isChecked) => {
		setProducts((prev) => prev.map((item) => ({ ...item, checked: isChecked })));
	};

	// Count checked items for the bottom sticky bar
	const selectedCount = products.filter((item) => item.checked).length;

	useTitle("Etoile - Favorites");

	return (
		<div className="app-container">
			<Navbar />
			<main className="favorites-page">
				<div className="favorites-wrapper">
					<h1 className="favorites-title">
						Ulubione <span className="count">({products.length})</span>
					</h1>

					<div className="favorites-card shadow">
						<FavoritesHeader products={products} onToggleAll={handleToggleAll} />

						<div className="favorites-list">
							{products.map((product) => (
								<FavoritesItem
									key={product.id}
									product={product}
									onToggleCheck={() => handleToggleCheck(product.id)}
								/>
							))}
						</div>
					</div>

					<FavoritesSuggestions items={suggestedProducts} />
				</div>
			</main>

			<FavoritesStickyBar selectedCount={selectedCount} />
			<Footer />
		</div>
	);
}

export default Favorites;
