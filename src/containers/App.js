import React, {Component} from 'react';
import PollButton from '../components/PollButton';
import '../assets/stylesheets/App.css';
import starWarsLogo from '../assets/images/star_wars_logo.png';
import starTrekLogo from '../assets/images/star_trek_logo.png';
import vsLogo from '../assets/images/vs_logo.png';

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
      <div id="app-container">
        <header id="title">
          <div id="logo-container">
            <img id="star-wars-logo" className="logo" src={starWarsLogo} alt="Star Wars Logo"/>
            <img id="star-trek-logo" className="logo" src={starTrekLogo} alt="Star Trek Logo"/>
          </div>
          <img id="vs-logo" className="logo" src={vsLogo} alt="Vs Logo"/>
        </header>
        <div id="poll-container">
          {this.renderPollButtons()}
        </div>
      </div>
    );
  }
}

export default App;
