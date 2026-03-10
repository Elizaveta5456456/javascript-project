import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__logo">
          <img src="/img/logo.svg" alt="Design Gang" />
        </a>

        <nav className={`nav ${open ? "nav--open" : ""}`}>
          <a href="#catalog" onClick={() => setOpen(false)}>Каталог</a>
          <a href="#collection" onClick={() => setOpen(false)}>Коллекции</a>
          <a href="#about" onClick={() => setOpen(false)}>О нас</a>
          <a href="#contact" onClick={() => setOpen(false)}>Контакты</a>
        </nav>

        <a href="#contact" className="header__cta">Купить</a>

        <button className="burger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
