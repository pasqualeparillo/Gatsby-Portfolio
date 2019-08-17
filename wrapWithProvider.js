import React from "react"
import Layout from "./src/components/layout"

export default ({ element }) => {
  return (
    <Layout>
      <div className="flex flex-1 flex-col">{element}</div>
    </Layout>
  )
}
