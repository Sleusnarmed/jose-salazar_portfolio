import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./navbar.module.css";
import twitter from "@/assets/img/x-logo.png";
import linkedin from "@/assets/img/linkedin-logo.png";
import github from "@/assets/img/github-logo.png";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => setHamburgerOpen((prev) => !prev);

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
            <li className={styles.headerContainer_menu__listItem}>
              <NavLink
                onClick={toggleHamburger}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerContainer_menu__link} ${styles.active}`
                    : styles.headerContainer_menu__link
                }
                end
              >
                <span className={styles.headerContainer_menu__listTextOriginal}>
                  Home
                </span>
                <span className={styles.headerContainer_menu__listTextHover}>
                  Home
                </span>
              </NavLink>
            </li>
            <li className={styles.headerContainer_menu__listItem}>
              <NavLink
                onClick={toggleHamburger}
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerContainer_menu__link} ${styles.active}`
                    : styles.headerContainer_menu__link
                }
                end
              >
                <span className={styles.headerContainer_menu__listTextOriginal}>
                  Projects
                </span>
                <span className={styles.headerContainer_menu__listTextHover}>
                  Projects
                </span>
              </NavLink>
            </li>
            <li className={styles.headerContainer_menu__listItem}>
              <NavLink
                onClick={toggleHamburger}
                aria-label="About"
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerContainer_menu__link} ${styles.active}`
                    : styles.headerContainer_menu__link
                }
                end
              >
                <span className={styles.headerContainer_menu__listTextOriginal}>
                  About
                </span>
                <span className={styles.headerContainer_menu__listTextHover}>
                  About
                </span>
              </NavLink>
            </li>
            <li className={styles.headerContainer_menu__listItem}>
              <NavLink
                onClick={toggleHamburger}
                to="/resume"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerContainer_menu__link} ${styles.active}`
                    : styles.headerContainer_menu__link
                }
                end
              >
                <span className={styles.headerContainer_menu__listTextOriginal}>
                  Résumé
                </span>
                <span className={styles.headerContainer_menu__listTextHover}>
                  Résumé
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.headerContainer_menu__sideBar}>
          <div className={styles.headerContainer_menu__email}>
            <p className={styles.headerContainer_menu__email_paragraph}>
              Let&#39;s connect!
            </p>
            <a href="https://developer.mozilla.org/es/docs/Web/CSS/position">
              Send me an email
            </a>
          </div>
          <div className={styles.headerContainer_menu__socials}>
            <p>Follow me</p>
            <div className={styles.headerContainer_socials__imageContainer}>
              <div className={styles.headerContainer_socials__imageWrapper}>
                <img
                  className={styles.headerContainer_socials__image}
                  src={linkedin}
                  alt="Linkedin logo"
                />
              </div>
              <div className={styles.headerContainer_socials__imageWrapper}>
                <img
                  className={styles.headerContainer_socials__image}
                  src={github}
                  alt="Github logo"
                />
              </div>
              <div className={styles.headerContainer_socials__imageWrapper}>
                <img
                  className={styles.headerContainer_socials__image}
                  src={twitter}
                  alt="Twitter logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
