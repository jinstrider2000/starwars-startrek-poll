import React, {Component} from 'react';
import PollButton from '../components/PollButton';
const classNames = require('classnames');
import '../assets/stylesheets/App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    state = {buttons }
  }

  

  render() {
    return (
      <div id="poll-container">
        <PollButton />
        <PollButton />
      </div>
    );
  }
}

export default App;
