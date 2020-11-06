import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner/Banner";
import Section from "../components/section/Section";
import Image3 from "../components/image_files/image3";
import Image4 from "../components/image_files/image4";

const listInfo = [
  {
    content: "Super Efficient"
  },
  {
    content: "Deeply Commited"
  },
  {
    content: "Highly Skilled"
  },
];

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

const sectionContent = [
  {
    num: 1,
    heading: "What is inscope.ai?",
    content: "Inscope is a powerful sales and recruiting messaging platform that combines messaging with human centered artificial intelligence while seamlessly integrating with your CRM or applicant tracking system.",
    links: [],
    imgComponent: Image3,
  },
  {
    num: 2,
    heading: "Want to join our team?",
    content: "We are a fast-growing Seattle based start-up. We would love for you to potentially join our fast-paced, deeply collaborative agile team.",
    links: [
      {
        to: "/",
        title: "Let's Connect"
      }
    ],
    imgComponent: Image4,
  },
];

const About = () => (
  <Layout>
    <SEO title="About" />
    <Banner 
      heading="Inscope.ai" 
      subHeading="We Are Driven By Values" 
      links={links} 
      list={listInfo} 
    />
    {sectionContent.map((props, index) => {
        return (
          <Section key={index} {...props} >
            <p>{sectionContent[index].content}</p>
          </Section>
        )
      })}
  </Layout>
)

export default About
