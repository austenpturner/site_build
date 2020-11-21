import { Link } from "gatsby";
import React, { useState } from "react";
import styles, {toggle1, toggle2, toggle3, burgerLine, slideUp, slideDown} from "./header.module.scss";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function handleNavSlide() {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header>
        <h1>
          <Link to="/">
            inscope.ai
          </Link>
        </h1>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Company</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
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
          <li>
            <Link onClick={() => setNavOpen(false)} to="/">Home</Link>
          </li>
          <li>
            <Link onClick={() => setNavOpen(false)} to="/about">Company</Link>
          </li>
          <li>
            <Link onClick={() => setNavOpen(false)} to="/blog">Blog</Link>
          </li>
          <li>
            <Link onClick={() => setNavOpen(false)} to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
