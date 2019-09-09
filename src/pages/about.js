import React, { useContext, useEffect, useState } from 'react';
import { AnimationContext } from '../components/store/animation';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';

export default function AboutPage() {
	const { setPageLocation, indexHover, setIndexHover } = useContext(AnimationContext);
	const [hoverTextValue, setHoverTextValue] = useState('');
	useEffect(() => {
		setPageLocation('/');
	}, []);

	const circle = {
		size: {
			scale: 2,
			x: '-50%',
			y: '-50%',
			transition: {
				duration: 1.8,
				type: 'spring',
				stiffness: 25,
				ease: [0.17, 0.67, 0.83, 0.67]
			}
		},
		pulse: {
			y: ['-50%', '-55%', '-50%'],
			transition: {
				loop: Infinity,
				delay: 2,
				duration: 4
			}
		}
	};
	return <div className="flex flex-wrap-reverse w-full h-full relative"></div>;
}
