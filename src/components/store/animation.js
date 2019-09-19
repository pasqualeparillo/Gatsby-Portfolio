import React, { createContext, useState } from "react"
export const AnimationContext = createContext()

export function AnimationProvider(props) {
  const [pageLocation, setPageLocation] = useState("/")
  const [aboutActive, setAboutActive] = useState(false)
  const [workActive, setWorkActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)

  return (
    <AnimationContext.Provider
      value={{
        pageLocation,
        setPageLocation,
        aboutActive,
        setAboutActive,
        workActive,
        setWorkActive,
        contactActive,
        setContactActive,
      }}
    >
      {props.children}
    </AnimationContext.Provider>
  )
}
