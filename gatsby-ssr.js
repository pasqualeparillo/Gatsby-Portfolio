/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { renderToString } from "react-dom/server"
import { ContextProvider } from "./src/components/store/state"
import Layout from "./src/components/layout"
import { ServerStyleSheet } from "styled-components"

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // React Context in SSR/build
  const ConnectedBody = () => (
    <ContextProvider>
      <Layout>{bodyComponent}</Layout>
    </ContextProvider>
  )
  const sheet = new ServerStyleSheet()
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />))
  const styleElement = sheet.getStyleElement()
  setHeadComponents(styleElement)
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
