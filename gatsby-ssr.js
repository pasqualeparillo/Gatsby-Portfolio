/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { renderToString } from "react-dom/server"
import { ContextProvider } from "./src/components/store/state"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  // React Context in SSR/build
  const ConnectedBody = () => <ContextProvider>{bodyComponent}</ContextProvider>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
