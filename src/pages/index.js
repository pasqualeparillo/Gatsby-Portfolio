import React from "react"
import { Row, Square } from "../components/styled/container"

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-wrap w-full h-full bg-white relative">
      <Row>
        <Square>
          <div className="flex flex-col h-full w-full content-end items-end justify-end absolute ">
            <div className="flex items-center justify-center tracking-tighter lg:border-t-4 lg:border-l-4 border-l border-t-2 border-black w-full p-4 relative">
              <p
                className="font-extrabold uppercase whitespace-no-wrap"
                style={{ fontSize: "calc(25vw / 10)" }}
              >
                Pasquale Parillo
              </p>
            </div>
          </div>
        </Square>
        <Square />
        <Square />
        <Square />
      </Row>
      <Row>
        <Square />
        <Square />
        <Square />
        <Square>
          <Row className="h-full w-full flex flex-1">
            <Square rb="true" className="bg-yellow-400" />
            <Square lb="true" bb="true" className="lg:bg-white bg-blue-700" />
            <Square tr="true" br="true" className="lg:bg-white bg-red-600" />
            <Square tl="true" className="lg:bg-white bg-white" />
            <Square className="lg:inline-block hidden" />
            <Square className="lg:inline-block hidden" />
            <Square className="lg:inline-block hidden" />
            <Square className="lg:inline-block hidden bg-black" />
            <Square className="lg:inline-block hidden" />
            <Square className="lg:inline-block hidden bg-blue-700" />
            <Square className="lg:inline-block hidden" />
            <Square className="lg:inline-block hidden" />
            <Square className="lg:inline-block hidden bg-red-600" />
            <Square className="lg:inline-block hidden" />
            <Square className="lg:inline-block hidden" />
            <Square className="lg:inline-block hidden" />
          </Row>
        </Square>
      </Row>
    </div>
  )
}
