import React from "react";
import { Link } from "gatsby";
import styles from "./hero.module.scss";

const Hero = ({ heading, subHeading, info, children, links }) => {
  return (
    <section className={styles.hero}>
        <div className={styles.titleContainer}>
          <h1>{heading}</h1>
          <h2>{subHeading}</h2>
          <p>{info}</p>
          <div className={styles.btnContainer}>
            {links.map(({ to, title }) => {
              return (
                <Link key={title} to={to}>
                  <button className={styles.linkBtn}>{title}</button>
                </Link>
              )
            })}
          </div>
        </div>
        <div className={styles.img}>{children}</div>
    </section>
  )
};

export default Hero;