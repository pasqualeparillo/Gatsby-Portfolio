import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import { AnimationContext } from '../components/store/animation';
import { motion } from 'framer-motion';

export default function IndexPage() {
	const {
		setPageLocation,
		setIndexActive,
		setAboutActive,
		setWorkActive,
		setContactActive,
		mouseCoords,
		setMouseCoords
	} = useContext(AnimationContext);
	useEffect(() => {
		setPageLocation('/');
		setIndexActive(true);
		setWorkActive(false);
		setContactActive(false);
		setAboutActive(false);
	});

	const variants = {
		initial: { scale: 0.9, opacity: 1 },
		enter: {
			opacity: 1,
			transition: {
				duration: 1,
				ease: [0.43, 0.13, 0.23, 0.96]
			}
		},
		exit: {
			opacity: 0,
			transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
		}
	};

	return (
		<motion.div
			className="flex flex-wrap w-full h-full relative bg-black flex-1"
			initial="exit"
			animate="enter"
			exit="exit"
			variants={variants}
			onMouseMove={e => setMouseCoords(e.clientX)}
		>
			<div className="w-full flex  flex-1 flex-grow justify-center items-center test-style z-1000 text-white">
				<motion.p
					animate={{ x: mouseCoords / -20 }}
					transition={{ duration: 2, ease: 'linear' }}
					className="uppercase -ml-40 tracking-tighter"
				>
					Creative
				</motion.p>
			</div>
			<div className="w-full flex  flex-1 flex-grow justify-center items-center test-style z-1000 text-white ">
				<motion.p
					animate={{ x: mouseCoords / 20 }}
					transition={{ duration: 2, ease: 'linear' }}
					className="uppercase ml-24 tracking-tighter"
				>
					Developer
				</motion.p>
			</div>
			<div className="w-full flex" style={{ marginLeft: 'calc(11vw + 1rem)', height: '11vw' }}>
				<div className="w-1/3 flex justify-center items-center z-1000 text-white">
					<Link className="relative p-4 overflow-hidden" to="/about">
						<p className="uppercase link-hover">About</p>
					</Link>
				</div>
				<div className="w-1/3 flex justify-center items-center z-1000 text-white">
					<Link className="relative p-4 overflow-hidden" to="/work">
						<p className="uppercase link-hover">Work</p>
					</Link>
				</div>
				<div className="w-1/3 flex justify-center items-center z-1000 text-white">
					<Link className="relative p-4 overflow-hidden" to="/contact">
						<p className="uppercase link-hover">Contact</p>
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
