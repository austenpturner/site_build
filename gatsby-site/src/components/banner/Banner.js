import React from "react"
import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

const Banner = ({ heading, subHeading, links, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // debounce function
  // mark scroll event at passive 
  // creates smooth CSS transition on page scroll
  // source: https://css-tricks.com/styling-based-on-scroll-position/
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

  return (
    <div className="banner">
        <div className="title-container"> 
            <h1>{heading}</h1>
            <h2>{subHeading}</h2>
            <div className="btn-container">
              {links.map(({ to, title }) => {
                return (
                  <Link key={title} className="link-btn" to={to}>{title}</Link>
                )
              })}
            </div>
        </div>
        {children}
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Banner
