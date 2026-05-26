import "./Footer.css";

function Footer() {
	return (
		<footer className="footer">
			<div className="footerContent">
				<div className="footerBrand">
					<h3>Étoile</h3>
					<p>Sklep internetowy i blog o stylu, inspiracjach oraz modzie.</p>
				</div>

				<div className="footerLinks">
					<a href="#">Regulamin</a>
					<a
						href="../polityka_prywatnosci.pdf"
						className="cookie-link"
						target="_blank"
						rel="noopener noreferrer">
						Polityka Prywatności
					</a>
					<a href="#">Kontakt</a>
				</div>
			</div>

			<div className="footerBottom">
				<p>© 2026 Étoile. Wszystkie prawa zastrzeżone.</p>
			</div>
		</footer>
	);
}

export default Footer;
