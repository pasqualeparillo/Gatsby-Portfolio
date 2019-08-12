import React from "react"
import PropTypes from "prop-types"
import NavBar from "./header/navBar"
import Content from "./content/content"
import { ContextProvider } from "./store/state"
import "./layout.css"
import "./style.css"

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <div className="flex flex-col min-h-screen w-full overflow-y-hidden">
        <NavBar />
        <div className="flex flex-1 flex-col flex-grow justify-center">
          <Content>{children}</Content>
        </div>
      </div>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
