import React, {Component} from 'react';
import PollButton from '../components/PollButton';
import '../assets/stylesheets/App.css';
import starWarsLogo from '../assets/images/star_wars_logo.png';
import starTrekLogo from '../assets/images/star_trek_logo.png';
import vsLogo from '../assets/images/vs_logo.png';
import starWarsReactions from '../assets/images/star_wars_reactions.png';
import starTrekReactions from '../assets/images/star_trek_reactions.png'
import gruntAudio from '../assets/audio/street_fighter_grunt.mp3'

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
        <audio ref="audio_tag" src={gruntAudio} autoPlay/>
        <header id="title">
          <div id="logo-container">
            <img id="star-wars-logo" className="logo slide-in-from-left" src={starWarsLogo} alt="Star Wars Logo"/>
            <img id="vs-logo" className="logo rotate-fast-and-grow" src={vsLogo} alt="Vs Logo"/>
            <img id="star-trek-logo" className="logo slide-in-from-right" src={starTrekLogo} alt="Star Trek Logo"/>
          </div>
        </header>
        <div id="reaction-pics-container" className="fade-in">
          {this.state.buttons[0].selected ? <div className="response-pics" style={{backgroundImage: `url("${starWarsReactions}")`, backgroundPositionY: "480px"}}></div> : <div className="response-pics" style={{backgroundImage: `url("${starWarsReactions}")`}}></div>}
          {this.state.buttons[1].selected ? <div className="response-pics" style={{backgroundImage: `url("${starTrekReactions}")`, backgroundPositionY: "480px"}}></div> : <div className="response-pics" style={{backgroundImage: `url("${starTrekReactions}")`}}></div>}
        </div>
        <div id="poll-container" className="fade-in">
          {this.renderPollButtons()}
        </div>
      </div>
    );
  }
}

export default App;
