import React, { useContext, useEffect, useState } from 'react';
import { AnimationContext } from '../components/store/animation';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutPage() {
	const { setPageLocation } = useContext(AnimationContext);
	useEffect(() => {
		setPageLocation('/');
	}, []);

	return <div className="flex flex-wrap-reverse w-full h-full relative"></div>;
}
