import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

function Header() {
  const [navOpen, setNavOpen] = React.useState(false);

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
            <Link to="/page-2">Company</Link>
          </li>
          <li>
            <Link to="/page-2">Contact</Link>
          </li>
          <li>
            <Link to="/page-2">Blog</Link>
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Company</Link>
          </li>
          <li>
            <Link to="/page-2">Contact</Link>
          </li>
          <li>
            <Link to="/page-2">Blog</Link>
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
