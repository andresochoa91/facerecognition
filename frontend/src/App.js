import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import "tachyons";
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';


const app = new Clarifai.App({
 apiKey: 'a5859fd113154c43a55a9bd841ca1987'
});

const particlesOption = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 120,
      }
    }
  }
}


class App extends Component {
  constructor(){
    super()
    this.state = {
      input: "",
      imageURL: "",
      box: {},
      route: "signout"
    }
  }

  onClickSign = (event) => {
    event.target.id === "signout"?
      this.setState({ route: "signout" }):
      (event.target.id === "signin"?
        this.setState({ route: "signin" }):
        this.setState({ route: "signup" })) 
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("image");
    const widthImage = Number(image.width);
    const heightImage = Number(image.height);    

    return {
      topRow: clarifaiFace.top_row * heightImage,
      rightCol: widthImage - (clarifaiFace.right_col * widthImage),
      bottomRow: heightImage - (clarifaiFace.bottom_row * heightImage),
      leftCol: clarifaiFace.left_col * widthImage, 
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  } 

  onButtonSubmit = (event) => {
    this.setState({ imageURL: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log("Error", err))
  }
 
  signInForm = () => {
    return(  
      <SignIn onClickSign={ this.onClickSign }/>
    );
  }

  signUpForm = () => {
    return(
      <div>
        <SignUp onClickSign={ this.onClickSign }/>              
      </div>
    );
  }

  mainPage = () => {
    const { box, imageURL } = this.state;
    return(
      <div>
        <Navigation onClickSign={ this.onClickSign }/>
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit }/>
        <FaceRecognition box={ box }image={ imageURL }/>                  
      </div>
    )
  }

  render(){
    const { route } = this.state;
    return(
      <div style={{display: "flex", flexDirection: "column"}}>
        <div>
          <Particles className="particles" params={ particlesOption } />
          {
            route === "signin"?
               this.mainPage():
               (route === "signout"? this.signInForm(): this.signUpForm())    
          }
        </div>
      </div>
    )
  }
}

export default App;
