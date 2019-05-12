import React from 'react';

export default function PollButton(props) {
  return (
    <button id={`button-${props.index}`} className={props.classes} onClick={props.toogleButton.bind(null, props.index)}>{` ${props.choice} | ${props.clicks} `}</button>
  );
}