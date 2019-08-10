import styled from "styled-components"
import tw from "tailwind.macro"
import { motion } from "framer-motion"

export const SmallContainer = styled(motion.div)`
  ${tw`flex justify-center items-center`};
  ${props => props.positionstart && tw`self-start`};
  ${props => props.positionend && tw`self-end`};
  ${props => props.bgblack && tw`bg-black`};
`
export const LargeContainer = styled(motion.div)`
  ${tw`flex flex-grow`};
  ${props => props.sixty && tw`lg:w-3/5 w-full`};
  ${props => props.seventyfive && tw`lg:w-3/4 lg:h-3/4 h-full w-full`};
  ${props => props.fourty && tw`lg:w-2/5 w-full`};
  ${props => props.fifty && tw`lg:w-1/2 w-full`};
  ${props => props.eighty && tw`lg:w-4/5 w-full`};
  ${props => props.wrap && tw`flex-wrap`};
`
export const Square = styled(motion.div)`
  ${tw`lg:w-1/4 w-1/2 lg:border-2 border border-black relative overflow-hidden`};
  ${props => props.rb && tw`border-l-0 border-t-0 border-b border-r`};
  ${props => props.lb && tw`border-l border-t-0 border-b border-r-0`};
  ${props => props.tl && tw`border-l border-t border-b-0 border-r-0`};
  ${props => props.tr && tw`border-l-0 border-t border-b-0 border-r`};
`
export const Row = styled(motion.div)`
  ${tw`flex w-full flex-wrap`};
`
