import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const loc = useLocation();

  useEffect(() => {
    setActiveLink(loc.pathname);
    console.log(loc.pathname);
  }, [loc]);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link
              onClick={() => setActiveLink("/")}
              to="/"
              className={activeLink === "/" ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setActiveLink("/products")}
              to="/products"
              className={activeLink === "/products" ? styles.active : ""}
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
