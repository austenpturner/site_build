import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner/Banner";
import Section from "../components/section/Section";
import Image1 from "../components/image_files/image1";
import Image2 from "../components/image_files/image2";

const listInfo = [
  {
    content: "Get Their Attention"
  },
  {
    content: "Faster Execution"
  },
  {
    content: "Artificial Intelligence"
  },
];

const bannerLinks = [
  {
    to: "/",
    title: "Schedule A Demo"
  },
  {
    to: "/about",
    title: "About Us"
  }
];

const sectionContent = [
  {
    num: 1,
    heading: "Advanced Lead Generation",
    content: "",
    links: [
      {
        to: "/",
        title: "Schedule A Demo"
      }
    ],
    imgComponent: Image1,
  },
  {
    num: 2,
    heading: "Artificial Intelligence",
    content: "",
    links: [
      {
        to: "/",
        title: "Learn More"
      }
    ],
    imgComponent: Image2,
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner 
        heading="Close Faster," 
        subHeading="With Human Centered AI." 
        links={bannerLinks} 
        list={listInfo}
      />
      {sectionContent.map(props => (
          <Section key={props.heading} {...props} />
        )
      )}
    </Layout>
  )
};

export default IndexPage;
