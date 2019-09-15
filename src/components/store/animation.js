import React, { createContext, useState } from "react"
export const AnimationContext = createContext()

export function AnimationProvider(props) {
  const [pageLocation, setPageLocation] = useState("")
  return (
    <AnimationContext.Provider
      value={{
        pageLocation,
        setPageLocation,
      }}
    >
      {props.children}
    </AnimationContext.Provider>
  )
}
