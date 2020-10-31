import React from "react"
import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Banner = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="banner">
        <div className="title-container"> 
            <h1>Close Faster,</h1>
            <h2>With Human Centered AI.</h2>
            <div className="btn-container">
                <Link className="link-btn" to="page-2">Schedule A Demo</Link>
                <Link className="link-btn" to="page-2">About Us</Link>
            </div>
        </div>
        <ul>
            <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                Get Their Attention
            </li>
            <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                Faster Execution
            </li>
            <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                Artificial Intelligence
            </li>
        </ul>
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Banner
