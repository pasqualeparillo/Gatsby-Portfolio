import React from "react"
import { SmallContainer } from "../styled/container"
import SocialLinks from "./socialLinks"

export default function FooterIndex() {
  return (
    <div className="flex w-full justify-between h-1/8 absolute bottom-0 justify-end items-end self-end overflow-hidden z-50">
      <SmallContainer
        className="lg:w-1/4 w-1/2 h-full"
        bgblack="true"
        positionstart="true"
        initial={{ y: "120px" }}
        animate={{ y: "0px" }}
        transition={{ delay: 1.2, ease: "easeIn", duration: 0.4 }}
      >
        <div className="flex justify-around w-full p-4">
          <SocialLinks />
        </div>
      </SmallContainer>
    </div>
  )
}
