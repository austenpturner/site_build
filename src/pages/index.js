import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import Block from "../components/blocks/Blocks";
import indexContent from "../content/index";
import ProductImg from "../components/image_files/productImg";
import styles from "../components/layout/layout.module.scss";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero 
        heading={indexContent.bannerContent.heading} 
        subHeading={indexContent.bannerContent.subheading} 
        info={indexContent.bannerContent.info} 
        links={indexContent.bannerLinks} 
      >
        <ProductImg/>
      </Hero>
      <Banner
        list={indexContent.listInfo}
      >
      </Banner>
      <section className={styles.gridContainer}>
        {indexContent.sectionContent.map((props, index) => (
            <Block key={props.heading} {...props}>
              <p>{indexContent.sectionContent[index].content}</p>
            </Block>
          )
        )}
      </section>
    </Layout>
  )
};

export default IndexPage;
