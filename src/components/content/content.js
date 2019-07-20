import React from "react"
import { LargeContainer } from "../styled/container"
export default function Content(props) {
  return (
    <LargeContainer
      seventyfive="True"
      className="flex flex-grow self-center justify-start bg-indigo-900 overflow-hidden absolute z-40 -ml-1/2-px -mt-1/2-px"
    >
      {props.children}
    </LargeContainer>
  )
}
