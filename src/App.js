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
      imageURL: "",

    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = (event) => {
    this.setState({ imageURL: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
                  .then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)  // do something with response
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
