import React, { createContext, useState } from "react"
export const AnimationContext = createContext()

export function AnimationProvider(props) {
  const [pageLocation, setPageLocation] = useState("/")
  const [indexActive, setIndexActive] = useState(true)
  const [aboutActive, setAboutActive] = useState(false)
  const [workActive, setWorkActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)
  const [linkHovered, setLinkHover] = useState(false)
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })
  return (
    <AnimationContext.Provider
      value={{
        pageLocation,
        setPageLocation,
        indexActive,
        setIndexActive,
        aboutActive,
        setAboutActive,
        workActive,
        setWorkActive,
        contactActive,
        setContactActive,
        mouseCoords,
        setMouseCoords,
        linkHovered,
        setLinkHover,
      }}
    >
      {props.children}
    </AnimationContext.Provider>
  )
}
