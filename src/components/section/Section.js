import React from "react";
import { Link } from "gatsby";
import Fade from 'react-reveal/Fade';

const Section = ({ imgComponent, num, heading, children, links }) => {
  return (
    <div className="section">
        <div className="img-container">
          {React.createElement(imgComponent)}
        </div>
        <Fade right={num % 2 !== 0 ? true : false} left={num % 2 === 0 ? true : false}>
            <div className="content-container">
                <h4>{heading}</h4>
                {children}
                {links.map(({ to, title }) => {
                return (
                    <Link key={title} className="link-btn" to={to}>{title}</Link>
                )
                })}
            </div>
        </Fade>
    </div>
  )
};

export default Section;