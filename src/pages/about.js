import React, { useContext, useEffect } from 'react';
import { AnimationContext } from '../components/store/animation';

export default function AboutPage() {
	const { setPageLocation } = useContext(AnimationContext);
	useEffect(() => {
		setPageLocation('/');
	}, []);

	return <div className="flex flex-wrap-reverse w-full h-full relative"></div>;
}
