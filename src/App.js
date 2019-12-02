import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import "tachyons";
import Particles from 'react-particles-js';

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
  render(){
    return(
      <div style={{display: "flex", flexDirection: "column"}}>
        <Particles className="particles" params={particlesOption} />
        <Navigation />
        <Logo />
        <ImageLinkForm />
        {/*<FaceRecognition />*/}
      </div>
    )
  }
}

export default App;
