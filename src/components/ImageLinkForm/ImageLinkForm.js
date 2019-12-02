import React from 'react';

const ImageLinkForm = () => {
	return(
		<div className="center" style={{display: "flex", flexDirection: "column"}}>
			<p className="f3 center" >
				{ "Racoon that detects faces" }
			</p>
			<div className="pa4 br3 shadow-5 center form" >
				<input className="f4 pa2 w-70 center" type="text"/>
				<button className="w-30 grow f4 link ph3 pv2 dib white bg-purple" style={{cursor: "pointer"}}>Detect</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;