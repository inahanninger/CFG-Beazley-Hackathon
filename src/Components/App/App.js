import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './../../logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper } from '@material-ui/core';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <Container maxWidth="sm" className="App">
      <Paper>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
        <p>The current time is {currentTime}.</p>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </Paper>
    </Container>
    // <div className="App">
    //   <header className="App-header">
    //     <BrowserRouter>
    //       <div>
    //         <Link className="App-link" to="/">Home</Link>
    //         &nbsp;|&nbsp;
    //         <Link className="App-link" to="/page2">Page2</Link>
    //       </div>
    //       <Switch>
    //         <Route exact path="/">
    //             <img src={logo} className="App-logo" alt="logo" />
    //             <p>
    //               Edit <code>src/App.js</code> and save to reload.
    //             </p>
    //             <a
    //               className="App-link"
    //               href="https://reactjs.org"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               Learn React
    //             </a>
    //             <p>The current time is {currentTime}.</p>
    //         </Route>
    //         <Route path="/page2">
    //             <p>This is page 2!</p>
    //         </Route>
    //       </Switch>
    //     </BrowserRouter>
    //   </header>
    // </div>
  );
}

export default App;
