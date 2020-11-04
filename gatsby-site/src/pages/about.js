import React from "react"
// import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner/Banner"

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

const About = () => (
  <Layout>
    <SEO title="About" />
    <Banner heading="Close Faster," subHeading="With Human Centered AI." links={links}>
      <ul>
        <li>
            <FontAwesomeIcon icon={faCheckCircle} />
            Super Efficient
        </li>
        <li>
            <FontAwesomeIcon icon={faCheckCircle} />
            Deeply Commited
        </li>
        <li>
            <FontAwesomeIcon icon={faCheckCircle} />
            Highly Skilled
        </li>
      </ul>
    </Banner>
  </Layout>
)

export default About
