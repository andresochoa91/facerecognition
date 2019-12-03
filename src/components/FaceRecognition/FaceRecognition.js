import React from 'react';

const FaceRecognition = ({ image }) => {
	return(
		<img src={ image } alt="img" height="200px" width="auto" className="center ma3" />
	);
}

export default FaceRecognition;