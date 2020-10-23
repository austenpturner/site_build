import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header_styles.css"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          inscope.ai
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link></li>
          <li>
            <Link to="/page-2">
              Company
            </Link>
          </li>
          <li>
            <Link to="/page-2">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/page-2">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
