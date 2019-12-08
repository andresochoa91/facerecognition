import React from 'react';

const Navigation = ( { onClickSign }) => {
	return(
		<nav style={{display: "flex", justifyContent: "flex-end"}}>
			<p onClick={ onClickSign } 
			   className="f3 link dim black underline pa3 pointer" 
			   id="signout">
			   	Sign out
			</p>
		</nav>
	);
}

export default Navigation;