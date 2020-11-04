import React from "react"
import Fade from 'react-reveal/Fade';
import { Link } from "gatsby"
// import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner/Banner";
import Image1 from "../components/image_files/image1"
import Image2 from "../components/image_files/image2"

const links = [
  {
    "to": "about",
    "title": "Schedule A Demo"
  },
  {
    "to": "about",
    "title": "About Us"
  }
];

const IndexPage = () => {
  // const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Home" />
      <Banner heading="Close Faster," subHeading="With Human Centered AI." links={links}>
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
      </Banner>
      <div id="info">
        <div className="section">
          <div className="img-container">
            <Image1
              alt="people working in a coffee shop"
            />
          </div>
          <Fade right>
            <div className="content-container">
                <h4>Advanced Lead Generation</h4>
                <Link className="link-btn">Learn More</Link>
            </div>
          </Fade>
        </div>
        <div className="section">
          <div className="img-container">
            <Image2
              alt="view of iphone screen"
            />
          </div>
          <Fade left>
            <div className="content-container">
                <h4>Artificial Intelligence</h4>
                <Link className="link-btn">Learn More</Link>
            </div>
          </Fade>
        </div>
      </div>
      {/* <div id="last-section">
        <Image2
          fluid={data.file.childImageSharp.fluid}
          alt=""
        />
        <h4>We Are Driven By Values</h4>
      </div> */}
    </Layout>
  )
}

export default IndexPage
