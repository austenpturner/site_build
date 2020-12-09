import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./banner.module.scss";

const Banner = ({ heading, subHeading, info, children, links, list }) => {
  // debounce function & mark scroll event at passive 
  // creates smooth CSS transition on page scroll
  // source: https://css-tricks.com/styling-based-on-scroll-position/
  // const debounce = (fn) => {
  //   let frame;
  //   return (...params) => {
  //     if (frame) { 
  //       cancelAnimationFrame(frame);
  //     };
  //     frame = requestAnimationFrame(() => {
  //       fn(...params);
  //     });
  //   } 
  // };

  // const storeScroll = () => {
  //   document.documentElement.dataset.scroll = window.scrollY;
  // };

  // document.addEventListener('scroll', debounce(storeScroll), { passive: true });

  // storeScroll();

  return (
    <div className={styles.banner}>
        <div className={styles.titleContainer}>
          <div>
            <h1>{heading}</h1>
            <h2>{subHeading}</h2>
            <p>{info}</p>
            <div className={styles.btnContainer}>
              {links.map(({ to, title }) => {
                return (
                  <Link key={title} className={styles.linkBtn} to={to}>{title}</Link>
                )
              })}
            </div>
          </div> 
          <div className={styles.img}>{children}</div>
        </div>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <FontAwesomeIcon icon={faCheckCircle} />
                {item.content}
              </li>
            )
          })}
        </ul>
    </div>
  )
};

export default Banner;
