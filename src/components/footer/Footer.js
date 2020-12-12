import React from "react";
import { Link } from "gatsby";
import navItems from "../../content/nav";
import FacebookSVG from "../image_files/fbSVG";
import InstagramSVG from "../image_files/instaSVG";
import LinkedInSVG from "../image_files/linkedInSVG";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
      <ul className={styles.socialLinks}>
        <li>
          <a href="https://www.facebook.com/inscope/" rel="noreferrer" target="_blank">
            <FacebookSVG alt="Facebook symbol"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/inscope-ai/" rel="noreferrer" target="_blank">
            <LinkedInSVG alt="LinkedIn symbol"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/inscope.ai/" rel="noreferrer" target="_blank">
            <InstagramSVG alt="Instagram symbol"/>
          </a>
        </li>
      </ul>
      <p>&copy; 2020 Inscope.ai</p>
    </footer>
  )
};

export default Footer;