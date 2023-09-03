import logo from './logo.svg';
import './App.css';
import React from "react";
import Slider from "react-slick";
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Skills } from './components/Skills';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <ImageSlider slides={SliderData} />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
