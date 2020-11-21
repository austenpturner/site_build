import React from "react";
import PropTypes from "prop-types";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
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
