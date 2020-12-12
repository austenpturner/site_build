import React from "react";
import PropTypes from "prop-types";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./layout";

const Layout = ({ children }) => {
  return (
    <>
      <Nav/>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
