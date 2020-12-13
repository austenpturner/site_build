import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./banner.module.scss";

const Banner = ({ list }) => {
  return (
    <div className={styles.banner}>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <FontAwesomeIcon icon={faCheckCircle} />
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Banner;
