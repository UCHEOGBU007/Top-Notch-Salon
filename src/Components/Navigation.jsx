import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Css/Navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <div className={Styles.logo}>
          <img src="/Logo.jpg" alt="Little Lemon Logo" loading="lazy" />
        </div>

        <ul className={`${Styles.menu} ${isMenuOpen ? Styles.show : ""}`}>
          <li>
            <Link
              to="/"
              className={Styles.link}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className={Styles.link}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className={Styles.link}
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
          </li>
        </ul>

        <Link
          to="/Appointment"
          className={Styles.order}
          onClick={() => setIsMenuOpen(false)}
        >
          APPOINTMENT{" "}
        </Link>

        {!isMenuOpen ? (
          <div
            className={Styles.openmenu}
            onClick={() => setIsMenuOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Open menu"
            onKeyDown={(e) => e.key === "Enter" && setIsMenuOpen(true)}
          >
            <GiHamburgerMenu />
          </div>
        ) : (
          <div
            className={Styles.closemenu}
            onClick={() => setIsMenuOpen(false)}
          >
            <MdCancel />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
