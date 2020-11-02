import React from "react"
import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Banner = ({ children }) => {
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
            <h1>Close Faster,</h1>
            <h2>With Human Centered AI.</h2>
            <div className="btn-container">
                <Link className="link-btn" to="page-2">Schedule A Demo</Link>
                <Link className="link-btn" to="page-2">About Us</Link>
            </div>
        </div>
        <ul>
            <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                Get Their Attention
            </li>
            <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                Faster Execution
            </li>
            <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                Artificial Intelligence
            </li>
        </ul>
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Banner
