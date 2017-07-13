// @flow
import React from 'react';

import './TapButton.css';

export function TapButton(props) {
  return (
    <div className="tapWrapper">
      <div 
        className="tap-button" 
        onMouseUp={props.onReleased} 
        onTouchEnd={props.onReleased}
      >
        {props.text}
      </div>
    </div>
  );
}