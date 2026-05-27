import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import "./Konto.css";
import Info from "./components/Info.jsx";

export default function Konto() {
	return (
		<>
			<Navbar />
			<main>
				<nav className="kontoNav">
					<a href="./info">Info</a>
					<a href="./ustawienia">Ustawienia</a>
				</nav>
				<hr />
				<Routes>
					<Route path="/" element={<Navigate to="info" replace />} />
					<Route path="info" element={<Info />} />
					<Route path="ustawienia" element={<p>2</p>} />
					<Route path="*" element={<Navigate to="/konto/info" replace />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}
