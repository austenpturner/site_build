import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import navItems from "../../content/nav";
import NameLogo from "../image_files/nameLogo";
import styles, {toggle1, toggle2, toggle3, burgerLine, slideUp, slideDown} from "./nav.module.scss";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  // debounce function & mark scroll event at passive 
  // creates smooth CSS transition on page scroll
  // source: https://css-tricks.com/styling-based-on-scroll-position/
  useEffect(() => {
    const debounce = (fn) => {
      let frame;
      return (...params) => {
        if (frame) { 
          cancelAnimationFrame(frame);
        };
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      } 
    };

    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    };

    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    storeScroll();
  }, []);

  function handleNavSlide() {
    setNavOpen(!navOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <header>
        <h1>
          <Link to="/">
            <NameLogo />
            {/* inscope.ai */}
          </Link>
        </h1>
        <nav>
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.burger} onClick={handleNavSlide}>
          <div className={navOpen ? toggle1 : burgerLine}></div>
          <div className={navOpen ? toggle2 : burgerLine}></div>
          <div className={navOpen ? toggle3 : burgerLine}></div>
        </div>
        </nav>
      </header>
      <div id={styles.navSlider} className={navOpen ? slideDown : slideUp}>
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link onClick={() => setNavOpen(false)} to={item.link}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};

export default Nav;
