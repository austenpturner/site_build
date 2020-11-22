import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Banner from "../components/banner/Banner";
import Section from "../components/section/Section";
import indexContent from "../content/index";
import ChatImg from "../components/image_files/chatImage";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner 
        heading={indexContent.bannerContent.heading} 
        subHeading={indexContent.bannerContent.subheading} 
        info={indexContent.bannerContent.info} 
        links={indexContent.bannerLinks} 
        list={indexContent.listInfo}
      >
      <ChatImg/>
      </Banner>
      {indexContent.sectionContent.map(props => (
          <Section key={props.heading} {...props} />
        )
      )}
    </Layout>
  )
};

export default IndexPage;
