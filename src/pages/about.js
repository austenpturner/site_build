import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import Banner from "../components/banner/Banner";
import Thumbnail from "../components/thumbnail/thumbnail";
import aboutContent from "../content/about";
import styles from "../components/layout/layout.module.scss";

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className={styles.aboutSection}>
      <h1>{aboutContent.bannerContent.heading}</h1>
      <h2>{aboutContent.bannerContent.subheading}</h2>
      <p>{aboutContent.bannerContent.info}</p>
      <div className={styles.btnContainer}>
        {aboutContent.bannerLinks.map(({ to, title }) => {
          return (
            <Link key={title} className={styles.linkBtn} to={to}>{title}</Link>
          )
        })}
      </div>
    </section> 
    <Banner 
      list={aboutContent.listInfo}
    />
    <section className={styles.teamSection}>
      <h2>{aboutContent.teamContent.header}</h2>
      <div className={styles.teamContainer}>
        {aboutContent.teamContent.teamMemebers.map((props, index) => {
          return (
            <Thumbnail key={index} {...props}></Thumbnail>
          )
        })}
      </div>
    </section>
  </Layout>
)

export default About
