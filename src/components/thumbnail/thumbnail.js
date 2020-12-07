import React from "react";
import { Link } from "gatsby";
import styles from "./thumbnail.module.scss";

const Thumbnail = ({ imgComponent, name, titles, socialLinks }) => {
  return (
    <div className={styles.thumbnail}>
        {React.createElement(imgComponent)}
        <h3>{name}</h3>
        {titles.map((title, index) => {
            return (
                <h4 key={index}>{title}</h4>
            )
        })}
        <div className={styles.socialIcons}>
            {socialLinks.map(({imgComponent, link}, index) => {
                return (
                    <Link key={index} className={styles.iconContainer} target="_blank" to={link}>
                        {React.createElement(imgComponent)}
                    </Link>
                )
            })}
        </div>
    </div>
  )
};

export default Thumbnail;