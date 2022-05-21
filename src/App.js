import * as React from 'react';
import './App.css';
import { TextField } from '@material-ui/core';
import Header from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <Header />


      <br /><br />
      <TextField id="outlined-basic" label="Description" variant="outlined" />
      <TextField id="outlined-basic" label="Left" variant="outlined" />
      <br /><br />


      

    </div>


  );
}

export default App;