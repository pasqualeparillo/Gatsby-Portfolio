import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './header/navBar';
import { ContextProvider } from './store/state';
import { AnimatePresence, motion } from 'framer-motion';
import LayoutTransition from './layoutTransition';
import './layout.css';
import './style.css';

export const Layout = ({ children, location }) => {
	const duration = 1;

	const variants = {
		enter: {
			opacity: 1,
			transition: {
				duration: duration,
				when: 'beforeChildren'
			}
		},
		exit: {
			opacity: 1,
			transition: { duration: duration }
		}
	};
	return (
		<ContextProvider>
			<div className="flex flex-col min-h-screen w-full overflow-y-hidden">
				<NavBar />
				<AnimatePresence>
					<motion.div
						className="flex flex-1 flex-col flex-grow justify-center min-h-screen"
						initial="initial"
						key={location.pathname}
						variants={variants}
						animate="enter"
						exit="exit"
						style={{ transformStyle: 'preserve-3d' }}
					>
						<LayoutTransition />
						{children}
					</motion.div>
				</AnimatePresence>
			</div>
		</ContextProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};
Layout.defaultProps = {
	location: {}
};
export default Layout;
