import React, {Component} from 'react';
import PollButton from '../components/PollButton';
import '../assets/stylesheets/App.css';

const classNames = require('classnames');

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {choice: "Star Wars", selected: false, numOfClicks: 20},
        {choice: "Star Trek", selected: false, numOfClicks: 40}
      ]
    }
  }

  toogleButton = (index) => {
    const btnNowActive = !this.state.buttons[index].selected

    this.setState({buttons: this.state.buttons.map((btn, i) => {
      if (index === i || (btnNowActive && btn.selected)) {
        return {...btn, selected: !btn.selected}
      } else {
        return btn
      }
    })});
  }
  
  renderPollButtons = () => {
    return this.state.buttons.map((btn, i) => {
      return <PollButton key={i} index={i} choice={btn.choice} selected={btn.selected} clicks={btn.selected ? btn.numOfClicks + 1 : btn.numOfClicks} toogleButton={this.toogleButton} classes={classNames("button", {selected: btn.selected, unselected: !btn.selected})}/>
    });
  }

  render() {
    return (
      <div id="poll-container">
        {this.renderPollButtons()}
      </div>
    );
  }
}

export default App;
