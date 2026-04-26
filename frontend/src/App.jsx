import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import iconFavourite from "./assets/ulubione.png";
import iconCart from "./assets/Cart.png";
import iconLogo from "./assets/logo.png";
import iconAcc from "./assets/account.png";
import iconSample from "./assets/Sample.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <nav className="navbar">
        <a href="/" className="nav-logo">
          <img src={iconLogo} alt="Logo" />
        </a>

        <ul className="nav-menu">
          <li>
            <a href="#kreator">Kreator</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            href="ulubione"
            className="nav-icon"
            onClick={() => console.log("ulubione")}
          >
            <img
              src={iconFavourite}
              alt="ulubione"
              className="nav-iconFav-img"
            />
          </a>
          <a
            href="koszyk"
            className="nav-icon"
            onClick={() => console.log("koszyk")}
          >
            <img src={iconCart} alt="koszyk" className="nav-iconCart-img" />
          </a>
          <a
            href="konto"
            className="nav-icon"
            onClick={() => console.log("konto")}
          >
            <img src={iconAcc} alt="konto" className="nav-iconAcc-img" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
