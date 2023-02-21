import React from 'react';
import { Header, Footer, Body } from './components/BigBuildingBlocks';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-wrapper">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
