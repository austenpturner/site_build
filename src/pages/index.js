import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Banner from "../components/banner/Banner";
import Section from "../components/section/Section";
import indexContent from "../content/index";

const listInfo = indexContent.listInfo;
const bannerLinks = indexContent.bannerLinks;
const sectionContent = indexContent.sectionContent;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner 
        heading="Close Faster" 
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
