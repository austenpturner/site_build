import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import LinkedInColorSVG from "../components/image_files/linkedInColor";
import styles from "../components/layout/layout.module.scss";

const Contact = () => (
  <Layout>
    <SEO title="About" />
      <div className={styles.contactBanner}>
        <div className={styles.headerContainer}>
          <h1>Get In Touch</h1>
          <h2>Let's Connect!</h2>
          <p>Send us a message or find us on LinkedIn to learn more.</p>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.email}>
            <FontAwesomeIcon icon={faEnvelope} />
            <h3>Email</h3>
            <p>Send us a message</p>
            <a href="mailto:admin@inscope.ai" rel="noreferrer" target="_blank">
              admin@inscope.ai
            </a>
          </div>
          <div className={styles.socialMedia}>
            <FontAwesomeIcon icon={faThumbsUp} />
            <h3>Social Media</h3>
            <p>Follow us to learn more</p>
            <a href="https://www.linkedin.com/company/inscope-ai/" rel="noreferrer" target="_blank">
              <LinkedInColorSVG />
            </a>
          </div>
        </div>
      </div>
  </Layout>
)

export default Contact;