import React from "react"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner/Banner";
import Image1 from "../components/image_files/image1"
import Image2 from "../components/image_files/image2"

const IndexPage = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <div id="info">
        <div className="section">
          <div className="img-container">
            <Image1
              fluid={data.file.childImageSharp.fluid}
              alt=""
            />
          </div>
          <div className="content-container">
            <h4>Advanced Lead Generation</h4>
            <Link className="link-btn">Learn More</Link>
          </div>
        </div>
        <div className="section">
          <div className="img-container">
            <Image2
              fluid={data.file.childImageSharp.fluid}
              alt=""
            />
          </div>
          <div className="content-container">
            <h4>Artificial Intelligence</h4>
            <Link className="link-btn">Learn More</Link>
          </div>
        </div>
      </div>
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
