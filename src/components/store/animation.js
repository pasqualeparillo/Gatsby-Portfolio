import React, { createContext, useState } from 'react';
export const AnimationContext = createContext();

export function AnimationProvider(props) {
	const [pageLocation, setPageLocation] = useState('/');
	const [aboutActive, setAboutActive] = useState(false);
	return (
		<AnimationContext.Provider
			value={{
				pageLocation,
				setPageLocation,
				aboutActive,
				setAboutActive
			}}
		>
			{props.children}
		</AnimationContext.Provider>
	);
}
