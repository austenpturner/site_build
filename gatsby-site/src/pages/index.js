import React from "react"
import { Link } from "gatsby"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Close Faster,</h1>
    <h2>With Human Centered AI.</h2>
    <div>
      <Link to="page-2">Schedule A Demo</Link>
      <Link to="page-2">About Us</Link>
    </div>
    {/* <ul>
      <li>
        <FontAwesomeIcon icon={ faCheckCircle } />
        Get Their Attention
      </li>
      <li>
        <FontAwesomeIcon icon={ faCheckCircle } />
        Artificial Intelligence
      </li>
      <li>
        <FontAwesomeIcon icon={ faCheckCircle } />
        Faster Execution
      </li>
    </ul> */}
    
  </Layout>
)

export default IndexPage
