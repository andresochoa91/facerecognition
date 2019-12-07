import React from "react";

const SignIn = ({ onClickSign }) => {
	return(
		<div>
			<nav style={{display: "flex", justifyContent: "flex-end"}}>
				<p onClick={ onClickSign } 
				   className="f3 link dim black underline pa3 pointer" 
				   id="signup">
				   	Sign Up
				</p>
			</nav>	
			<div className="center ma4">
				<main className="br3 pa4 black-80 center shadow-1">
				  <form className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" type="email">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	   type="email" 
				        	   name="email-address"  
				        	   id="email-address" 
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" type="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	   type="password" 
				        	   name="password"  
				        	   id="password"
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick={ onClickSign } 
				      		 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      		 type="button" 
				      		 value="Sign in" 
				      		 id="signin" 
				      />
				    </div>
				  </form>
				</main>
			</div>
		</div>
	)
}

export default SignIn;