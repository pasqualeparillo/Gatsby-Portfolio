import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import MediaQuery from 'react-responsive';
import { AnimationContext, animationDuration } from '../../components/store/animation';
import { variant } from '../../components/store/variants';
export default function ContactTile() {
	const { pageLocation, setPageLocation } = useContext(AnimationContext);

	return (
		<div className="flex justify-between absolute h-full justify-end w-full overflow-hidden">
			<div className="flex h-full w-full flex items-center justify-center cursor-pointer">
				<Link className="w-full h-full" to="/contact" onClick={() => setPageLocation('/contact')}>
					<MediaQuery minWidth={992}>
						<div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
							<div
								className="flex items-center justify-center tracking-tighter w-full p-4 relative text-black transform hover:bg-black overflow-hidden border-black hover:text-white"
								style={{ height: '100%' }}
							>
								<AnimatePresence>
									<motion.div
										className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer overflow-hidden"
										key={pageLocation}
										variants={variant}
										initial={{ opacity: 0 }}
										animate="enter"
										exit="exit"
									>
										<div
											className="flex items-center justify-center tracking-tighter w-full p-4 bg-white text-black relative hover:bg-black hover:text-white transform"
											style={{ height: '100%' }}
										>
											<p className="font-extrabold uppercase whitespace-no-wrap text-vw">
												Contact
											</p>
										</div>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</MediaQuery>

					<MediaQuery maxWidth={992}>
						<div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
							<div className="flex items-center justify-center tracking-tighter w-full h-full p-4 bg-black text-white relative hover:bg-white hover:text-black transform">
								<p className="uppercase font-extrabold " style={{ fontSize: 'calc(25vw)' }}>
									C
								</p>
							</div>
						</div>
					</MediaQuery>
				</Link>
			</div>
		</div>
	);
}
