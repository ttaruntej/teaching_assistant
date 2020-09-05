import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import bgad from './components/audio/bg.mp3'
import Subjects from './components/Subjects'




function App() {

  

  return (
    <div className="App">
     
     
      <Navbar />
      <Home />
      <Subjects />
      
     <div  style={{zIndex:"-8"}}><audio autoPlay loop >
                     <source src={bgad} type="audio/mp3" autoPlay />
               </audio>
      </div>
     
      </div>
      
     
      
      
  );
}

export default App;
