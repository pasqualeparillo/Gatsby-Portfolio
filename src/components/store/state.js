import React from "react"
import { AnimationProvider } from "./animation"

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  )
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<AnimationProvider />]}>
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
