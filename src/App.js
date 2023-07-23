import AppBar from '@mui/material/AppBar';
import './App.css';
import React, { Component } from 'react';
import MenuAppBar from './MenuAppBar';


class App extends Component {


  render() {
    return (
      <AppBar position='static'>
        <MenuAppBar/> 
      </AppBar>
    );
  }
}


export default App;
