import React, {Component} from 'react';
import PollButton from '../components/PollButton';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {buttons: []};
  }

  render() {
    return (
      <div id="poll-container">
        <PollButton/>
        <PollButton/>
      </div>
    );
  }
}

export default App;
