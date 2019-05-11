import React, {Component} from 'react';
import './App.css';


class PollButton extends Component {
  
  constructor(props) {
    super(props);
    this.state = {clicked: false};
  }

  toogleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return (
      <button onClick={this.toogleClick}>{` ${this.props.choice} | ${''} `}</button>
    );
  }
}

export default PollButton;