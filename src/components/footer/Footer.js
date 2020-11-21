import React from "react";
import { Link } from "gatsby"
import navItems from "../../content/nav";
import FacebookSVG from "../image_files/fbSVG";
import InstagramSVG from "../image_files/instaSVG";
import TwitterSVG from "../image_files/twitterSVG";
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
          <FacebookSVG 
            alt="Facebook symbol"
          />
        </li>
        <li>
          <LinkedInSVG 
            alt="LinkedIn symbol"
          />
        </li>
        <li>
          <InstagramSVG 
            alt="Instagram symbol"
          />
        </li>
        <li>
          <TwitterSVG 
            alt="Twitter symbol"
          />
        </li>
      </ul>
      <p>&copy; 2020 Inscope.ai</p>
    </footer>
  )
};

export default Footer;