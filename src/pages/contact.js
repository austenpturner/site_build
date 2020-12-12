import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import contactContent from "../content/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../components/layout/layout.module.scss";

const Contact = () => (
  <Layout>
    <SEO title="About" />
      <section className={styles.contactSection}>
        <div className={styles.headerContainer}>
          <h1>{contactContent.heading}</h1>
          <h2>{contactContent.subheading}</h2>
          <p>{contactContent.info}</p>
        </div>
        <div className={styles.contactContainer}>
        {contactContent.contactTypes.map((type, index) => {
          return (
            <div key={index}>
              <FontAwesomeIcon icon={type.icon} />
              <h3>{type.type}</h3>
              <h4>{type.info}</h4>
              <a href={type.link} rel="noreferrer" target="_blank">
                {(typeof type.button) === "string" ? type.button : React.createElement(type.button)}
              </a>
            </div>
          )
        })}
        </div>
      </section>
  </Layout>
)

export default Contact;