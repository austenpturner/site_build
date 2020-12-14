import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import Banner from "../components/banner/Banner";
import Thumbnail from "../components/thumbnail/thumbnail";
import aboutContent from "../content/about";
import styles from "../components/layout/layout.module.scss";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeamMember {
        edges {
          node {
            name
            linkedIn
            title
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  const teamMembers = data.allContentfulTeamMember.edges;

  return (
    <Layout>
    <SEO title="About" />
    <section className={styles.aboutSection}>
      <h1>{aboutContent.heading}</h1>
      <h2>{aboutContent.subheading}</h2>
      <p>{aboutContent.info}</p>
      <div className={styles.btnContainer}>
        {aboutContent.bannerLinks.map((link, index) => {
          return (
            <Link key={index} className={styles.linkBtn} to={link.to}>{link.title}</Link>
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
        {teamMembers.map((props, index) => {
          return (
            <Thumbnail key={index} {...props}></Thumbnail>
          )
        })}
      </div>
    </section>
  </Layout>
  )
}

export default About
