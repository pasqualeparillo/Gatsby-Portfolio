import React from 'react';
import Icon from '../../images/logo-3.svg';
import MediaQuery from 'react-responsive';
import { motion } from 'framer-motion';

export default function Logo() {
	return (
		<motion.div
			className="z-50 absolute w-full "
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<MediaQuery minWidth={992}>
				<div className="h-16 w-40 top-0 border-2 border-gray-1000 flex flex-wrap absolute mt-4 z-40  bg-neon-900 shadow-2xl mx-auto left-0 right-0">
					<div className="w-1/2 flex flex-wrap justify-center items-center">
						<img
							className="fill-current text-gray-1000 w-1/2 self-center flex items-center"
							alt="#"
							src={Icon}
							style={{ transform: 'translateY(5px)' }}
						/>
					</div>
					<div className="w-1/2 flex flex-wrap border-l-2 border-gray-1000">
						<div className="w-1/2 flex relative items-end justify-end">
							<p className="font-gray-1000 m-px font__work-sans ">P</p>
						</div>
						<div className="w-1/2 flex relative items-end justify-start">
							<p className="font-gray-1000 m-px font__work-sans ">A</p>
						</div>
						<div className="w-1/2 flex relative items-start justify-end">
							<p className="font-gray-1000 m-px font__work-sans ">T</p>
						</div>
						<div className="w-1/2 flex relative items-start justify-start">
							<p className="font-gray-1000 m-px font__work-sans ">P</p>
						</div>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<div className="h-20 w-40 top-0 left-0 border-2 border-gray-1000 flex flex-wrap absolute z-50 bg-teal-100 shadow ">
					<div className="w-1/2 flex flex-wrap justify-center items-center">
						<img
							className="fill-current text-gray-1000 w-1/2 self-center flex items-center"
							alt="#"
							src={Icon}
							style={{ transform: 'translateY(5px)' }}
						/>
					</div>
					<div className="w-1/2 flex flex-wrap border-l-2 border-gray-1000">
						<div className="w-1/2 flex relative items-end justify-end">
							<p className="font-gray-1000 m-px font__work-sans ">P</p>
						</div>
						<div className="w-1/2 flex relative items-end justify-start">
							<p className="font-gray-1000 m-px font__work-sans ">A</p>
						</div>
						<div className="w-1/2 flex relative items-start justify-end">
							<p className="font-gray-1000 m-px font__work-sans ">T</p>
						</div>
						<div className="w-1/2 flex relative items-start justify-start">
							<p className="font-gray-1000 m-px font__work-sans ">P</p>
						</div>
					</div>
				</div>
			</MediaQuery>
		</motion.div>
	);
}
