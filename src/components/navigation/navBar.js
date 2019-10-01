import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';

export default function NavBar() {
	const [open, setIsOpen] = useState(false);
	const desktopNav = {
		closed: {
			width: '11vw',
			height: '11vw',
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
	const mobileNav = {
		closed: {
			width: '6rem',
			height: '6rem',
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
		<div className="z-1000 fixed left-0 bottom-0 " onClick={() => setIsOpen(!open)} style={{ left: '1rem' }}>
			<MediaQuery minWidth={992}>
				<motion.div
					animate={open ? 'open' : 'closed'}
					initial="closed"
					variants={desktopNav}
					className="z-1000 bg-black flex justify-center overflow-y-hidden overflow-x-hidden transform hover:shadow-lg cursor-pointer border-4 border-white"
				>
					<div style={{ height: '11vw', width: '11vw', left: '1rem' }} className="fixed bottom-0">
						<div
							className="flex flex-wrap justify-center items-center self-center align-middle relative"
							style={{
								height: '50px',
								width: '50px',
								left: '50%',
								bottom: '50%',
								top: '50%',
								transform: 'translate(calc(50% - 50px), calc(50% - 50px))'
							}}
						>
							<div className="w-1/2 flex justify-center items-center">
								<p className="text-white font-black text-xs   ">M</p>
							</div>
							<div className="w-1/2 flex justify-center items-center">
								<p className="text-white font-black text-xs   ">E</p>
							</div>
							<div className="w-1/2 flex justify-center items-center">
								<p className="text-white font-black text-xs   ">N</p>
							</div>
							<div className="w-1/2 flex justify-center items-center">
								<p className="text-white font-black text-xs   ">U</p>
							</div>
						</div>
					</div>
				</motion.div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<motion.div
					animate={open ? 'open' : 'closed'}
					initial="closed"
					variants={mobileNav}
					className="fixed left-0 bottom-0 z-50 bg-gray-1000 flex justify-center overflow-y-hidden overflow-x-hidden transform hover:shadow-lg cursor-pointer0"
					onClick={() => setIsOpen(!open)}
				>
					<div
						className="flex flex-wrap justify-center items-center self-center align-middle absolute"
						style={{
							height: '50px',
							width: '50px',
							left: '1.5rem',
							bottom: '1.5rem'
						}}
					>
						<div className="w-1/2 flex justify-center items-center">
							<p className="text-white font-gray-1000 text-xs   ">M</p>
						</div>
						<div className="w-1/2 flex justify-center items-center">
							<p className="text-white font-gray-1000 text-xs   ">E</p>
						</div>
						<div className="w-1/2 flex justify-center items-center">
							<p className="text-white font-gray-1000 text-xs   ">N</p>
						</div>
						<div className="w-1/2 flex justify-center items-center">
							<p className="text-white font-gray-1000 text-xs   ">U</p>
						</div>
					</div>
				</motion.div>
			</MediaQuery>
		</div>
	);
}
