import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactBar from './components/Contactbar'

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <ContactBar/>
      </>
  );
}

export default App;
