import React from "react";
import { Link } from "gatsby";
import Fade from 'react-reveal/Fade';
import styles from "./block.module.scss";

const Section = ({ imgComponent, heading, children, links }) => {
  return (
    <div className={styles.block}>
        <Fade>
        <div className={styles.imgContainer}>
          {React.createElement(imgComponent)}
        </div>
        </Fade>
        <Fade>
            <div className={styles.contentContainer}>
                <h4>{heading}</h4>
                {children}
                {links.map(({ to, title }) => {
                return (
                    <Link key={title} className={styles.linkBtn} to={to}>{title}</Link>
                )
                })}
            </div>
        </Fade>
    </div>
  )
};

export default Section;