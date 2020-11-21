import React from "react";
import { Link } from "gatsby"
import FacebookSVG from "../image_files/fbSVG";
import InstagramSVG from "../image_files/instaSVG";
import TwitterSVG from "../image_files/twitterSVG";
import LinkedInSVG from "../image_files/linkedInSVG";
import "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Company</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul id="social-links">
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