import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import iconFavourite from "./assets/ulubione.png";
import iconCart from "./assets/Cart.png";
import iconLogo from "./assets/logo.png";
import iconAcc from "./assets/account.png";
import iconSample from "./assets/Sample.png";

const CartItem = ({ title, price }) => (
  <div className="item">
    <div className="placeholder-img" />
    <div className="item-info">
      <p>{title}</p>
      <span className="price">{price} zł</span>
    </div>
  </div>
);

const Suggestion = ({ price, name }) => (
  <div className="suggested-item">
    <div className="placeholder-img small" />
    <p className="price">{price} zł</p>
    <p className="small-text">{name}</p>
  </div>
);

function App() {
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
      <div className="cart-page-container">
        <div className="cart-layout">
          {/* LEWA STRONA: KOSZYK I PROPOZYCJE */}
          <div className="cart-main">
            <div className="white-card shadow">
              <div className="cart-top-bar">
                <label>
                  <input type="checkbox" defaultChecked /> cały koszyk
                </label>
                <button className="text-btn">USUŃ</button>
              </div>

              <div className="delivery-section">
                <p className="vendor-info">
                  Przesyłka od Oficjalny sklep Springos
                </p>
                <div className="cart-product">
                  <input type="checkbox" defaultChecked />
                  <div className="img-placeholder" />
                  <div className="product-info">
                    <p className="product-name">
                      LEŻAK OGRODOWY krzesło PLAŻOWY FOTEL TURYSTYCZNY SKŁADANY
                      ZERO GRAVITY
                    </p>
                    <div className="product-row">
                      <div className="qty-picker">
                        <button>-</button>
                        <input type="text" value="1" readOnly />
                        <button>+</button>
                      </div>
                      <span className="price-big">97,99 zł</span>
                    </div>
                  </div>
                </div>
                <p className="smart-delivery">
                  dostawa od 14,99 zł lub za 0,00 zł z <strong>smart</strong>
                </p>
              </div>
            </div>

            <h2 className="upsell-heading">Dorzuć do przesyłki!</h2>
            <div className="upsell-grid">
              {[
                { p: "89,95", t: "LEŻAK OGRODOWY..." },
                { p: "96,99", t: "LEŻAK OGRODOWY..." },
                { p: "56,95", t: "TAŚMA OGRODOWA..." },
                { p: "12,95", t: "OPASKI ZACISKOWE..." },
              ].map((item, index) => (
                <div key={index} className="upsell-box shadow">
                  <div className="img-placeholder-small" />
                  <p className="price-mid">{item.p} zł</p>
                  <p className="upsell-text">{item.t}</p>
                  <button className="add-btn">DO KOSZYKA</button>
                </div>
              ))}
            </div>
          </div>

          {/* PRAWA STRONA: PODSUMOWANIE */}
          <div className="cart-sidebar">
            <div className="white-card shadow summary-box">
              <div className="summary-line">
                <span>Wartość produktów</span>
                <span>97,99 zł</span>
              </div>
              <div className="summary-line">
                <span>Dostawa od</span>
                <span>14,99 zł</span>
              </div>
              <hr className="divider-line" />
              <div className="summary-line total-line">
                <span>Razem z dostawą</span>
                <span className="final-price">112,98 zł</span>
              </div>

              <button className="btn-allegro blue">ZAPŁAĆ PÓŹNIEJ</button>
              <button className="btn-allegro orange">DOSTAWA I PŁATNOŚĆ</button>
              <button className="btn-allegro transparent">
                KONTYNUUJ ZAKUPY
              </button>
            </div>

            <div className="white-card shadow protection-box">
              <div className="shield-icon">A</div>
              <div className="protection-text">
                <strong>Allegro Ochrona Kupujących</strong>
                <p>
                  Wygodne zwroty, reklamacje online oraz 2 lata ochrony zakupu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
