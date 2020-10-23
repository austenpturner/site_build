import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import "./header_styles.css"

function Navigation() {
    return (
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
    );
};

export default Navigation;