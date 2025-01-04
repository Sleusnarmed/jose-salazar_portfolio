import { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log(hamburgerOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContainer_navbar}>
        <h1 className={styles.headerContainer_name}>José Salazar</h1>
        <button
          className={`${styles.headerContainer_burgerMenu} ${
            hamburgerOpen ? styles.open : ""
          }`}
          onClick={toggleHamburger}
          aria-expanded={hamburgerOpen} // Para indicar el estado del menú (importante para accesibilidad)
          aria-label="Toggle menu" // Descripción para lectores de pantalla
        >
          <div className={styles.burgerMenu_bar1}></div>
          <div className={styles.burgerMenu_bar2}></div>
          <div className={styles.burgerMenu_bar3}></div>
          <div className={styles.burgerMenu_bar4}></div>
        </button>
      </div>

      <div
        className={`${styles.headerContainer_menu} ${
          hamburgerOpen ? styles.open : ""
        }`}
      >
        <div className={styles.headerContainer_menu__content}>
          <ul className={styles.headerContainer_menu__list}>
            <li className={styles.headerContainer_menu__listItem}>Home</li>
            <li className={styles.headerContainer_menu__listItem}>Projects</li>
            <li className={styles.headerContainer_menu__listItem}>About</li>
            <li className={styles.headerContainer_menu__listItem}>Résumé</li>
          </ul>
        </div>
        <div className={styles.headerContainer_menu__sideBar}>
          <div className={styles.headerContainer_menu__email}>
            <a href="https://developer.mozilla.org/es/docs/Web/CSS/position">
              Send me an email
            </a>
          </div>
          <div className={styles.headerContainer_menu__socials}>
            Redes sociales:
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
