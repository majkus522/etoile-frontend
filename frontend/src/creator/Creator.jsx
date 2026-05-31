import { useState } from "react";
import "./Creator.css";

import CreatorTitle from "./componenty/CreatorTitle.jsx";
import MaterialSelector from "./componenty/MaterialSelector.jsx";
import CreatorActions from "./componenty/CreatorActions.jsx";
import JewelryTypeSelector from "./componenty/TypeSelector.jsx";
import LengthSelector from "./componenty/LengthSelector.jsx";
import CharmsSelector from "./componenty/CharmsSelector.jsx";
import PriceSummary from "./componenty/PriceSummary.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useTitle } from "../main.jsx";

function Creator() {
	const [selectedMaterial, setSelectedMaterial] = useState(1);
	const [isOpen, setIsOpen] = useState(true);
	const [selectedType, setSelectedType] = useState("bracelet");
	const [selectedLength, setSelectedLength] = useState("18 cm");
	const [isLengthOpen, setIsLengthOpen] = useState(true);
	const [selectedCharm1, setSelectedCharm1] = useState("heart");
	const [selectedCharm2, setSelectedCharm2] = useState("none");

	const basePrice = selectedType === "bracelet" ? 800 : 1000;

	const metalPrices = {
		1: 3800,
		2: 4200,
		3: 4000,
		4: 5200,
		5: 1800,
	};

	const lengthPrices = {
		bracelet: {
			"16 cm": 0,
			"18 cm": 200,
			"20 cm": 400,
		},
		necklace: {
			"40 cm": 0,
			"45 cm": 300,
			"50 cm": 600,
		},
	};

	const lengthPrice = lengthPrices[selectedType]?.[selectedLength] ?? 0;

	const charmPrice = 800;

	const charmsPrice = charmPrice + (selectedCharm2 === "none" ? 0 : charmPrice);

	const metalPrice = metalPrices[selectedMaterial];

	const totalPrice = basePrice + charmsPrice + lengthPrice + metalPrice;

	useTitle("Etoile - Kreator");
	return (
		<>
			<Navbar />
			<main className="creator-page">
				<div className="creator-wrapper">
					<CreatorTitle />

					<JewelryTypeSelector
						selectedType={selectedType}
						setSelectedType={setSelectedType}
					/>

					<MaterialSelector
						selectedMaterial={selectedMaterial}
						setSelectedMaterial={setSelectedMaterial}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>

					<LengthSelector
						selectedType={selectedType}
						selectedLength={selectedLength}
						setSelectedLength={setSelectedLength}
						isLengthOpen={isLengthOpen}
						setIsLengthOpen={setIsLengthOpen}
					/>

					<CharmsSelector
						selectedCharm1={selectedCharm1}
						setSelectedCharm1={setSelectedCharm1}
						selectedCharm2={selectedCharm2}
						setSelectedCharm2={setSelectedCharm2}
					/>

					<PriceSummary
						basePrice={basePrice}
						charmsPrice={charmsPrice}
						lengthPrice={lengthPrice}
						metalPrice={metalPrice}
						totalPrice={totalPrice}
					/>

					<CreatorActions />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Creator;
