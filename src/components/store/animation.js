import React, { createContext, useState } from "react"
export const AnimationContext = createContext()

export function AnimationProvider(props) {
  const [isClicked, setIsClicked] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isProjectOpen, setIsProjectOpen] = useState(false)
  return (
    <AnimationContext.Provider
      value={{
        isClicked,
        setIsClicked,
        isContactOpen,
        setIsContactOpen,
        isProjectOpen,
        setIsProjectOpen,
      }}
    >
      {props.children}
    </AnimationContext.Provider>
  )
}
