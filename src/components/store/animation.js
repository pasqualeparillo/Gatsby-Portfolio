import React, { createContext, useState } from "react"

export const AnimationContext = createContext()

export function AnimationProvider(props) {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <AnimationContext.Provider value={{ isClicked, setIsClicked }}>
      {props.children}
    </AnimationContext.Provider>
  )
}
