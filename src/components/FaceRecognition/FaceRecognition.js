import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ image, box }) => {
	return(
		<div className="center ma">
			<div className="center ma absolute mt2">
				<img id="image" src={ image } alt="" height="200px" width="auto" className="center ma3" />
				<div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow , left: box.leftCol }}></div>
			</div>			
		</div>
	);
}

export default FaceRecognition;