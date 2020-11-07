import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner/Banner";
import Section from "../components/section/Section";
import aboutContent from "../content/about";

const listInfo = aboutContent.listInfo;
const links = aboutContent.bannerLinks;
const sectionContent = aboutContent.sectionContent;

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
