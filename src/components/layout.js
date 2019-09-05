import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './header/navBar';
import { ContextProvider } from './store/state';
import { AnimatePresence, motion } from 'framer-motion';
import { animationDuration } from '../components/store/variants';
import './layout.css';
import './style.css';
import LayoutTransition from './layoutTransition';

export const Layout = ({ children, location }) => {
	const variants = {
		enter: {
			opacity: 1
		},
		exit: {
			opacity: 1
		}
	};
	return (
		<ContextProvider>
			<div className="flex flex-col min-h-screen w-full overflow-hidden">
				<NavBar />
				<AnimatePresence>
					<LayoutTransition />
					<motion.div
						className="flex flex-1 flex-col flex-grow justify-center min-h-screen"
						key={location.pathname}
						variants={variants}
						animate="enter"
						exit="exit"
						style={{ transformStyle: 'preserve-3d' }}
					>
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
