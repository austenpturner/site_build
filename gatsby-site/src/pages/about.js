import React from "react";
import Fade from 'react-reveal/Fade';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner/Banner";
import Image3 from "../components/image_files/image3";
import Image4 from "../components/image_files/image4";

const links = [
  {
    "to": "/",
    "title": "Schedule A Demo"
  },
  {
    "to": "/",
    "title": "Contact Us"
  }
];

const About = () => (
  <Layout>
    <SEO title="About" />
    <Banner heading="Inscope.ai" subHeading="We Are Driven By Values" links={links}>
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
    <div id="info">
      <div className="section">
        <div className="img-container">
          <Image3
            alt="people working in an office"
          />
        </div>
        <Fade right>
          <div className="content-container">
              <h4>What is inscope.ai?</h4>
              <p>
                Inscope is a powerful sales and recruiting messaging platform that combines messaging
                with human centered artificial intelligence while seamlessly integrating with your CRM
                or applicant tracking system.
              </p>
          </div>
        </Fade>
      </div>
      <div className="section">
        <div className="img-container">
          <Image4
            alt="view of iphone screen"
          />
        </div>
        <Fade left>
          <div className="content-container">
              <h4>Want to join our team?</h4>
              <p>
                We are a fast-growing Seattle based start-up. We would love for you to potentially join our
                fast-paced, deeply collaborative agile team.
              </p>
              <Link className="link-btn" to="/">Let's Connect</Link>
          </div>
        </Fade>
      </div>
    </div>
  </Layout>
)

export default About
