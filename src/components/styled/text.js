import styled from "styled-components";
import tw from "tailwind.macro";

export const BaseText = styled("p")`
  ${tw`text-base`};
  ${props => props.small && tw`text-xs`};
  ${props => props.medium && tw`text-base`};
  ${props => props.large && tw`text-lg`};
  ${props => props.white && tw`text-white`};
  ${props => props.semibold && tw`font-semibold`};
  ${props => props.uppercase && tw`uppercase`};
`;
export const LargeContainer = styled("div")`
  ${tw`flex flex-grow`};
`;