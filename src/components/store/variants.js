import { animationDuration } from './animation';
{
	/*Tile animation */
}
export const variant = {
	enter: {
		opacity: 1,
		transition: {
			duration: animationDuration / 2,
			delay: animationDuration * 1.2
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: animationDuration
		}
	}
};
