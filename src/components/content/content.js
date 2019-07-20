import React from "react"
import { LargeContainer } from "../styled/container"

export default function Content(props) {
  return (
    <LargeContainer
      animate={{ height: "75%", width: "75%" }}
      transition={{ ease: "easeInOut", duration: 1.2 }}
      className="flex flex-grow self-center justify-start bg-indigo-900 overflow-hidden absolute h-full w-full z-40 -ml-1/2-px -mt-1/2-px"
    >
      {props.children}
    </LargeContainer>
  )
}
