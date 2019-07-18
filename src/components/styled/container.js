import styled from "styled-components";
import tw from "tailwind.macro";
import { motion } from "framer-motion"

export const SmallContainer = styled(motion.div)`
  ${tw`flex justify-center items-center h-20`};
  ${props => props.start && tw`self-start`};
  ${props => props.end && tw`self-end`};
  ${props => props.black && tw`bg-black`};
`;
export const LargeContainer = styled("div")`
  ${tw`flex flex-grow`};
  ${props => props.contentContainer && tw`self-center w-5/6`};
  ${props => props.sixty && tw`lg:w-3/5 w-full`};
  ${props => props.fourty && tw`lg:w-2/5 w-full`};
  ${props => props.wrap && tw`flex-wrap`};
`;