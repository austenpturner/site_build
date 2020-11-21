import { Link } from "gatsby";
import React, { useState } from "react";
import navItems from "../../content/nav";
import styles, {toggle1, toggle2, toggle3, burgerLine, slideUp, slideDown} from "./header.module.scss";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function handleNavSlide() {
    setNavOpen(!navOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <header>
        <h1>
          <Link to="/">
            inscope.ai
          </Link>
        </h1>
        <nav>
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.burger} onClick={handleNavSlide}>
          <div className={navOpen ? toggle1 : burgerLine}></div>
          <div className={navOpen ? toggle2 : burgerLine}></div>
          <div className={navOpen ? toggle3 : burgerLine}></div>
        </div>
        </nav>
      </header>
      <div id={styles.navSlider} className={navOpen ? slideDown : slideUp}>
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link onClick={() => setNavOpen(false)} to={item.link}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};

export default Header;
