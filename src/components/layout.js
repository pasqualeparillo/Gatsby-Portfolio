import React from "react"
import PropTypes from "prop-types"
import NavBar from "./navigation/navBar"
import Logo from "./navigation/logo"
import { ContextProvider } from "./store/state"
import { AnimatePresence, motion } from "framer-motion"
import "./layout.css"
import "./style.css"
import SocialLinks from "./navigation/socialLinks"
import CopyRight from "./navigation/copyRight"

export const Layout = ({ children, location }) => {
  const variants = {
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  }
  return (
    <ContextProvider>
      <div className="flex flex-col min-h-screen w-full bg-white">
        <>
          <Logo />
        </>
        <>
          <SocialLinks />
        </>
        <>
          <NavBar />
        </>
        <AnimatePresence>
          <motion.div
            className="flex flex-1 flex-col flex-grow justify-center min-h-screen"
            key={location.pathname}
            variants={variants}
            animate="enter"
            exit="exit"
            style={{ transformStyle: "preserve-3d" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <CopyRight />
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
