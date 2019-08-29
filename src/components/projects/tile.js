import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import { AnimationContext } from '../../components/store/animation';
import { motion, AnimatePresence } from 'framer-motion';

export function Tile({ title }) {
	const { pageLocation } = useContext(AnimationContext);
	const item = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				delay: 1
			}
		},
		exit: {
			y: -300,
			opacity: 0,
			transition: {
				duration: 1
			}
		}
	};
	return (
		<AnimatePresence>
			<motion.div
				className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer overflow-hidden"
				key={pageLocation}
				variants={item}
				initial={{ y: 300, opacity: 0 }}
				animate="open"
				exit="exit"
			>
				<div
					className="flex items-center justify-center tracking-tighter w-full p-4 bg-white text-black relative hover:bg-black hover:text-white transform"
					style={{ height: '100%' }}
				>
					<p className="font-extrabold uppercase whitespace-no-wrap text-5xl">{title}</p>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
export function CloseTile() {
	const { pageLocation, setPageLocation } = useContext(AnimationContext);
	useEffect(() => {
		setPageLocation('/projects');
	}, [pageLocation]);
	return (
		<Link className="h-full w-full" to="/">
			<div className="flex flex-col h-full w-full absolute cursor-pointer overflow-hidden">
				<div className="flex flex-1 justify-center items-center h-full w-full relative ">
					<AnimatePresence>
						{console.log(pageLocation)}
						{pageLocation === '/projects' && (
							<>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ delay: 1 }}
									className="w-2 h-full bg-black absolute"
								/>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="w-full h-2 bg-black "
								/>
							</>
						)}
					</AnimatePresence>
				</div>
			</div>
		</Link>
	);
}
