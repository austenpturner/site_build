import React from "react";
import { Link } from "gatsby";
import Fade from 'react-reveal/Fade';
import PropTypes from "prop-types";
import Image1 from "../image_files/image1";
import Image2 from "../image_files/image2";

const Section = ({ children }) => {
  return (
    <div id="info">
        <div className="section">
          <div className="img-container">
            <Image1
              alt="people working in a coffee shop"
            />
          </div>
          <Fade right>
            <div className="content-container">
                <h4>Advanced Lead Generation</h4>
                <Link className="link-btn">Learn More</Link>
            </div>
          </Fade>
        </div>
        <div className="section">
          <div className="img-container">
            <Image2
              alt="view of iphone screen"
            />
          </div>
          <Fade left>
            <div className="content-container">
                <h4>Artificial Intelligence</h4>
                <Link className="link-btn">Learn More</Link>
            </div>
          </Fade>
        </div>
    </div>
  )
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;