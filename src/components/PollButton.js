import React, {Component} from 'react';
import './App.css';

class PollButton extends Component {
  
  constructor(props) {
    super(props);
    this.state = {clicks: props.initClicks};
  }

  render() {
    return (
      <button id="choice-0">{`Star Wars | `}</button>
    );
  }
}

export default PollButton;