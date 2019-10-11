import React from 'react';
import './App.css';
import Tabs from './component/header/Tabbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Appbar from './component/header/Appbar'

function App() {
  return (
    <MuiThemeProvider>
      <Appbar />
      <Tabs/>
    </MuiThemeProvider>
  );
}

export default App;
