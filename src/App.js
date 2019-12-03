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

const app = new Clarifai.App({
 apiKey: 'a5859fd113154c43a55a9bd841ca1987'
});

const particlesOption = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 200,
      }
    }
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: "",
      imageURL: "https://www.doyourownpestcontrol.com/images/shutterstock_raccoon-500-t.jpg",

    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = (event) => {
    console.log(this.state.input);
    this.setState({ imageURL: this.state.input })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, this.state.imageURL)
                  .then(
      function(response) {
        console.log(response)  // do something with response
      },
      function(err) {
        // there was an error
      }
    );  
  }


  render(){
    return(
      <div style={{display: "flex", flexDirection: "column"}}>
        <Particles className="particles" params={ particlesOption } />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit }/>
        <FaceRecognition image={ this.state.imageURL }/>
      </div>
    )
  }
}

export default App;
