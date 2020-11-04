import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner/Banner";
import Section from "../components/section/Section";

const links = [
  {
    "to": "/",
    "title": "Schedule A Demo"
  },
  {
    "to": "/about",
    "title": "About Us"
  }
];

const IndexPage = () => {
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
      <Section />
    </Layout>
  )
};

export default IndexPage;
