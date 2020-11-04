import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
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
      {/* <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Company</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
      </ul> */}
      <p>&copy; 2020 Inscope. All Rights Reserved.</p>
    </footer>
  )
}

// Footer.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Footer