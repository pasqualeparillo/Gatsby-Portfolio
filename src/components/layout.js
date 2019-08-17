import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import NavBar from "./header/navBar"
import { ContextProvider } from "./store/state"
import "./layout.css"
import "./style.css"
import { AnimatePresence, motion } from "framer-motion"

const duration = 1

const variants = {
  initial: {},
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      when: "afterChildren",
    },
  },
  exit: {
    opacity: 1,
    transition: { duration: duration },
  },
}

export const Layout = ({ children, location }) => {
  return (
    <ContextProvider>
      <div className="flex flex-col min-h-screen w-full overflow-y-hidden">
        <NavBar />
        <AnimatePresence>
          <motion.div
            className="flex flex-1 flex-col flex-grow justify-center min-h-screen"
            initial="initial"
            key={location.pathname || null}
            variants={variants}
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
