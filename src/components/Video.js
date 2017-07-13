// @flow
import React from 'react';

import './Video.css';

export function Video(props) {

  return (
    <video id="videoFrame" ref={props.videoRef} onTimeUpdate={(event)=>{if (event.target.currentTime >= 45) event.target.pause();}}>
      <source src={props.video} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  );
}