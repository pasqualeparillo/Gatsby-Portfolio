import React from 'react';
import Icon from '../../images/logo-3.svg';
import MediaQuery from 'react-responsive';
import { motion } from 'framer-motion';

export default function Logo() {
	return (
		<motion.div
			className="z-1000 fixed w-full "
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<MediaQuery minWidth={992}>
				<div
					className="h-40 w-32 top-0 border-4 border-white absolute mt-4 z-40 bg-black p-2"
					style={{ right: '1rem' }}
				>
					<div className="relative h-full w-full flex flex-wrap">
						<div className="w-full flex" style={{ height: '60%' }}>
							<img
								className="fill-current text-white bg-cover "
								alt="logo"
								src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							/>
						</div>
						<div className="w-full" style={{ height: '40%' }}>
							<p className="text-white font-semibold">Pasquale Parillo</p>
						</div>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<div className="h-20 w-40 top-0 left-0 border-2 border-white flex flex-wrap absolute z-50 bg-teal-100 shadow ">
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
							<p className="m-px text-white ">P</p>
						</div>
						<div className="w-1/2 flex relative items-end justify-start">
							<p className="m-px text-white  ">A</p>
						</div>
						<div className="w-1/2 flex relative items-start justify-end">
							<p className="m-px text-white  ">T</p>
						</div>
						<div className="w-1/2 flex relative items-start justify-start">
							<p className="m-px text-white  ">P</p>
						</div>
					</div>
				</div>
			</MediaQuery>
		</motion.div>
	);
}
