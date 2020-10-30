import React from "react"
import { Link, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image1 from "../components/image_files/image1"
import Image2 from "../components/image_files/image2"

const IndexPage = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Home" />
      <section id="title-container">
        <div id="title"> 
          <h1>Close Faster,</h1>
          <h2>With Human Centered AI.</h2>
          <div>
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
      </section>
      <section id="info">
        <div>
          <div className="img-container">
            <Image1
              fluid={data.file.childImageSharp.fluid}
              alt=""
            />
          </div>
          <div>
            <h4>Advanced Lead Generation</h4>
            <Link className="link-btn">Learn More</Link>
          </div>
        </div>
        <div>
          <div className="img-container">
            <Image2
              fluid={data.file.childImageSharp.fluid}
              alt=""
            />
          </div>
          <div>
            <h4>Artificial Intelligence</h4>
            <Link className="link-btn">Learn More</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "annie-spratt-dWYU3i-mqEo-unsplash.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
