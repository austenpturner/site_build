import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

const Footer = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <footer>
        <p>&copy; 2020 Inscope. All Rights Reserved.</p>
    </footer>
  )
}
Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer