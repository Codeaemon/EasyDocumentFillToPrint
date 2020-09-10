import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div style={{ width:'100%',background:"gray"}}>
      <div>
        <Header/>
      </div>
      <Navbar/>
    </div>
  );
}

export default App;
