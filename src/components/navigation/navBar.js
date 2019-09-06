import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function NavBar() {
	const [open, setIsOpen] = useState(false);
	const list = {
		closed: {
			width: '9.5rem',
			height: '9.5rem',
			transition: {
				type: 'tween',
				when: 'afterChildren',
				staggerChildren: 0.1
			}
		},
		open: {
			width: '100vw',
			height: '100vh',
			transition: {
				type: 'tween',
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		}
	};

	return (
		<motion.div
			animate={open ? 'open' : 'closed'}
			initial="closed"
			variants={list}
			className="absolute left-0 bottom-0 z-50 bg-black flex justify-center overflow-y-hidden overflow-x-hidden transform hover:shadow-lg  cursor-pointer"
			onClick={() => setIsOpen(!open)}
		>
			<div
				className="flex flex-wrap justify-center items-center self-center align-middle absolute"
				style={{ height: '50px', width: '50px', left: '50px', bottom: '50px' }}
			>
				<div className="w-1/2 flex justify-center items-center">
					<p className="text-white font-black text-xs">M</p>
				</div>
				<div className="w-1/2 flex justify-center items-center">
					<p className="text-white font-black text-xs">E</p>
				</div>
				<div className="w-1/2 flex justify-center items-center">
					<p className="text-white font-black text-xs">N</p>
				</div>
				<div className="w-1/2 flex justify-center items-center">
					<p className="text-white font-black text-xs">U</p>
				</div>
			</div>
		</motion.div>
	);
}
