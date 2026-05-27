import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const hasConsented = localStorage.getItem("cookieConsent");
		if (!hasConsented) {
			setIsVisible(true);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookieConsent", "accepted");
		setIsVisible(false);
	};

	const handleDecline = () => {
		localStorage.setItem("cookieConsent", "declined");
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className="cookie-banner">
			<div className="cookie-container">
				<div className="cookie-text">
					<p>
						Używamy plików cookie, aby ułatwić Ci korzystanie z naszego serwisu.
						Klikając „Akceptuję”, wyrażasz zgodę na ich użycie. Szczegóły znajdziesz w{" "}
						<a
							href="../polityka_prywatnosci.pdf"
							className="cookie-link"
							target="_blank"
							rel="noopener noreferrer">
							Polityka Prywatności
						</a>
						.
					</p>
				</div>

				<div className="cookie-buttons">
					<button onClick={handleDecline} className="cookie-btn cookie-btn-decline">
						Odrzuć
					</button>
					<button onClick={handleAccept} className="cookie-btn cookie-btn-accept">
						Akceptuję
					</button>
				</div>
			</div>
		</div>
	);
};

export default CookieConsent;
