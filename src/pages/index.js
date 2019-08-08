import React from "react"
import { Row, Square } from "../components/styled/container";

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-wrap w-full h-full bg-orange-200">
        <Row>
            <Square />
            <Square />
            <Square />
            <Square />
          </Row>
          <Row>
            <Square />
            <Square />
            <Square />
            <Square />
          </Row>
    </div>
  )
}
