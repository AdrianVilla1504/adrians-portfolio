import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactBar from './components/ContactBar';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <Technologies/>
        <ContactBar/>

      </>
  );
}

export default App;
