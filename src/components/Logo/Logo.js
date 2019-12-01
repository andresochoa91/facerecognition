import React from 'react';
import Tilt from 'react-tilt';

const Logo = () => {
	return(
		<div className="ma4 mt0">
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
				 <div className="Tilt-inner"> <img src="https://webstockreview.net/images/clipart-brain-angry.png" alt="img"/> </div>
			</Tilt>			
		</div>
	);
}

export default Logo;