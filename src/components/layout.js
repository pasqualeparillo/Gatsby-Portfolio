import React from "react"
import PropTypes from "prop-types"
import NavBar from "./navigation/navBar"
import Logo from "./navigation/logo"
import { ContextProvider } from "./store/state"
import { AnimatePresence } from "framer-motion"
import "./layout.css"
import "./style.css"
import { CircleIndex } from "./content/circle"

export const Layout = ({ children, location }) => {
  return (
    <ContextProvider>
      <div className="flex flex-col min-h-screen w-full bg-white ">
        <Logo />
        <NavBar />
        <div className="flex flex-1 flex-col flex-grow justify-center min-h-screen overflow-x-hidden">
          <AnimatePresence exitBeforeEnter initial={false}>
            {children}
          </AnimatePresence>
          <CircleIndex location={location.pathname} />
        </div>
      </div>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  location: {},
}
export default Layout
