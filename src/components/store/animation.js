import React, { createContext, useState } from 'react';
export const AnimationContext = createContext();

export const animationDuration = 1;

export function AnimationProvider(props) {
	const [isClicked, setIsClicked] = useState(false);
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [isProjectOpen, setIsProjectOpen] = useState(false);
	const [pageLocation, setPageLocation] = useState('');
	return (
		<AnimationContext.Provider
			value={{
				isClicked,
				setIsClicked,
				isContactOpen,
				setIsContactOpen,
				isProjectOpen,
				setIsProjectOpen,
				pageLocation,
				setPageLocation
			}}
		>
			{props.children}
		</AnimationContext.Provider>
	);
}
