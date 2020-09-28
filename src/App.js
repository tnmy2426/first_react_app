import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
// import Navbar from './components/Navbar';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Hello name='Tanmoy' age='25' />
      <Hello name='Akib' age='30' />
      <Hello name='Rakib' age='26' />

      {/* <Welcome /> */}
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
