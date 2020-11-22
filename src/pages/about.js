import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Banner from "../components/banner/Banner";
import Section from "../components/section/Section";
import aboutContent from "../content/about";

const About = () => (
  <Layout>
    <SEO title="About" />
    <Banner 
      heading={aboutContent.bannerContent.heading} 
      subHeading={aboutContent.bannerContent.subheading} 
      info={aboutContent.bannerContent.info}  
      links={aboutContent.bannerLinks} 
      list={aboutContent.listInfo} 
    />
    {aboutContent.sectionContent.map((props, index) => {
        return (
          <Section key={index} {...props} >
            <p>{aboutContent.sectionContent[index].content}</p>
          </Section>
        )
      })}
  </Layout>
)

export default About
