import React from "react";
import { Link } from "gatsby";
import Fade from 'react-reveal/Fade';
import styles from "./section.module.scss";

const Section = ({ imgComponent, num, heading, children, links }) => {
  return (
    <div className={styles.section}>
        <div className={styles.imgContainer}>
          {React.createElement(imgComponent)}
        </div>
        <Fade right={num % 2 !== 0 ? true : false} left={num % 2 === 0 ? true : false}>
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