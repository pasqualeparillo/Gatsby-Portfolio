import React, { createContext, useState } from 'react';
export const AnimationContext = createContext();

export function AnimationProvider(props) {
	const [indexHover, setIndexHover] = useState(false);
	const [pageLocation, setPageLocation] = useState('');
	return (
		<AnimationContext.Provider
			value={{
				indexHover,
				setIndexHover,
				pageLocation,
				setPageLocation
			}}
		>
			{props.children}
		</AnimationContext.Provider>
	);
}
