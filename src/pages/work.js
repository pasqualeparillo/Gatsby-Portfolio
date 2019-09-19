import React, { useContext, useEffect } from 'react';
import { AnimationContext } from '../components/store/animation';
import { motion } from 'framer-motion';

export default function WorkPage() {
	const { setPageLocation } = useContext(AnimationContext);
	useEffect(() => {
		setPageLocation('/work');
	}, []);
	const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
	const variants = {
		initial: { scale: 0.9, opacity: 0 },
		enter: { scale: 1, opacity: 1, transition },
		exit: {
			scale: 0.5,
			opacity: 0,
			transition: { duration: 1.5, ...transition }
		}
	};
	return (
		<motion.div
			className="flex flex-wrap-reverse w-full h-full relative"
			initial="exit"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={transition}
		></motion.div>
	);
}
