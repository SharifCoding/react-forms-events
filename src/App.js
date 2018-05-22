import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import FormComp from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Form App</h1>
        </header>
      </div>
      {/* Render the form component FormComp */}
      <FormComp />
      </div>
    );
  }
}

export default App;
