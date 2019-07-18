/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import HeaderWrapper from './wrappers/headerWrapper'
import FooterWrapper from './wrappers/footerWrapper'
import "./layout.css"
import "./style.css"
import {HorizontalBg, VerticalBg} from "./wrappers/backgroundWrapper";

const Layout = ({ children }) => {
  return (
      <div className="flex flex-col min-h-screen w-full overflow-y-hidden">
      <HorizontalBg />
      <VerticalBg />
      <HeaderWrapper />
        {children}
      <FooterWrapper />
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
