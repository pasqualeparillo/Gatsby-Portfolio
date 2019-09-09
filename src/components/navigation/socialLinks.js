import React from 'react';
import { motion } from 'framer-motion';

export default function SocialLinks() {
	const parent = {
		animation: {
			opacity: 1,
			x: 0,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.3,
				duration: 1
			}
		}
	};
	const child = {
		animation: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1
			}
		}
	};
	return (
		<motion.div
			className="right-0 pr-6 lg:pt-12 pt-6 top-0 absolute"
			initial={{ opacity: 0, x: 50 }}
			variants={parent}
			animate="animation"
		>
			<div className="flex flex-wrap justify-center items-center w-10 h-40">
				<motion.div
					variants={child}
					initial={{ opacity: 0, y: 20 }}
					className="w-10 h-10 border border-neon-900 bg-black shadow-2xl"
				/>
				<motion.div
					variants={child}
					initial={{ opacity: 0, y: 20 }}
					className="w-10 h-10 border border-neon-900 bg-black shadow-2xl"
				/>
				<motion.div
					variants={child}
					initial={{ opacity: 0, y: 20 }}
					className="w-10 h-10 border border-neon-900 bg-black shadow-2xl"
				/>
			</div>
		</motion.div>
	);
}
