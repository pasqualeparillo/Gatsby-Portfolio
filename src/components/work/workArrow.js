import React from 'react';

export default function WorkArrow({ styles }) {
	return (
		<svg className={`${styles}`} xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
			<path
				fill-rule="evenodd"
				d="M1.364 17.38l.749.749L16.474 3.767v11.23l1.906-1.905V.364H5.652L3.746 2.27h11.23L.617 16.63z"
			/>
		</svg>
	);
}
