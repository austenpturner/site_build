import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import Banner from "../components/banner/Banner";
// import Block from "../components/blocks/Blocks";
import Thumbnail from "../components/thumbnail/thumbnail";
import aboutContent from "../content/about";
import styles from "../components/layout/layout.module.scss";

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
    {/* {aboutContent.sectionContent.map((props, index) => {
      return (
        <Block key={index} {...props} >
          <p>{aboutContent.sectionContent[index].content}</p>
        </Block>
      )
    })} */}
    <div className={styles.teamSection}>
      <h1>{aboutContent.teamContent.header}</h1>
      <div className={styles.teamContainer}>
        {aboutContent.teamContent.teamMemebers.map((props, index) => {
          return (
            <Thumbnail key={index} {...props}></Thumbnail>
          )
        })}
      </div>
    </div>
  </Layout>
)

export default About
