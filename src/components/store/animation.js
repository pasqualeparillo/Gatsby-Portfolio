import React, { createContext, useState } from "react"

export const AnimationContext = createContext()

export function AnimationProvider(props) {
  const [isClicked, setIsClicked] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  return (
    <AnimationContext.Provider
      value={{ isClicked, setIsClicked, isContactOpen, setIsContactOpen }}
    >
      {props.children}
    </AnimationContext.Provider>
  )
}
