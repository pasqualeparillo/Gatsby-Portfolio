import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export const Square = styled(motion.div)`
	${tw`lg:border-2 border border-black relative overflow-hidden`};
	${props => props.wfourth && tw`lg:w-1/4 w-1/2`};
	${props => props.rb && tw`border-l-0 border-t-0 border-b border-r`};
	${props => props.lb && tw`border-l border-t-0 border-b border-r-0`};
	${props => props.tl && tw`border-l border-t border-b-0 border-r-0`};
	${props => props.tr && tw`border-l-0 border-t border-b-0 border-r`};
	${props => props.whalf && tw`w-1/2 max-w-1/2 lg:border-px`}
`;
export const Row = styled(motion.div)`
	${tw`flex w-full flex-wrap overflow-hidden`};
`;
