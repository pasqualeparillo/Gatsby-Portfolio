{
	/*Tile animation */
}
export const animationDuration = 1;

export const variant = {
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: animationDuration / 2,
			delay: animationDuration * 2
		}
	},
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			duration: animationDuration / 2
		}
	}
};
