import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"

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
            <Link to="/about">Contact</Link>
          </li>
          <li>
            <Link to="/about">Blog</Link>
          </li>
        </ul>
        <div id="burger" onClick={handleNavSlide}>
          <div className={navOpen ? "line toggle1" : "line"} id="line1"></div>
          <div className={navOpen ? "line toggle2" : "line"} id="line2"></div>
          <div className={navOpen ? "line toggle3" : "line"} id="line3"></div>
        </div>
        </nav>
      </header>
      <div id="navSlider" className={navOpen ? "slide-down" : "slide-up"}>
        <ul>
          <li>
            <Link onClick={() => setNavOpen(false)} to="/">Home</Link>
          </li>
          <li>
            <Link onClick={() => setNavOpen(false)} to="/about">Company</Link>
          </li>
          <li>
            <Link onClick={() => setNavOpen(false)} to="/about">Contact</Link>
          </li>
          <li>
            <Link onClick={() => setNavOpen(false)} to="/about">Blog</Link>
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
