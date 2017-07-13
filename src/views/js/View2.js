// @flow
import React, { Component } from 'react';
import type { Output } from '../Types';

// Import component to be developed as required by specs document here
// import Comp from '../../components/Comp';
import {Video} from '../../components/Video';

//Import relevant components as required by specs document here
import {TapButton} from '../../components/TapButton';
import {problems} from '../../components/problems';
import {Choices} from '../../components/Choices';

/* Import Assets as required by specs document
ex.
import asset from '../../assets/asset.png';
*/
import vfile0 from '../../assets/video.mp4';

// Import CSS here
import '../css/View2.css';

/* Define constants here

ex.
const MY_CONSTANT = 42;
*/

export type Props = {
  onClick: (Output) => void
};

export class View2 extends Component {
  videoElement = null;

  state: {
    output: Output
  }

  constructor(props: Props){
    super(props);

    this.state = {
      currentStep: 0,//0: not started video, 1: playing video, 2: finished video
      output: {},
      curProblemNo:0,
    }

    this.showText = this.showText.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.onSelected = this.onSelected.bind(this);
  }

  onSelected(selectedChoice, letterIndex){
    console.log(selectedChoice, letterIndex);
    this.props.onClick({problemNo: this.state.curProblemNo, selected: selectedChoice, letterIndex: letterIndex})
  }

  showText(){
    if (this.state.currentStep !== 2){
      return ( 
        <div className="before-play">
          <h1>Guess what will happen next</h1>
          <p className="text">PLAY THIS VIDEO AND SELECT YOUR BEST GUESS</p>
          <TapButton onReleased={this.mouseUp} text={(this.state.currentStep === 0) ? "PLAY" : "PLAYING"} />
        </div>
        );
    } else {
      return(
        <div className="after-play">
          <h1 className="question">What will happen next?</h1>
          <Choices choice={problems[this.state.curProblemNo]} onSelected={this.onSelected}/>
        </div>
      );
    }
  }

  mouseUp(event){
    event.preventDefault();
    if (this.videoElement){
      this.videoElement.play();
      this.setState({currentStep : 1});
      this.videoElement.addEventListener("pause", ()=>{this.setState({currentStep : 2})});
    }
  }

  render() {
    return (
      <div className="viewContainer justifyCenter">
        {/* TODO: insert additional assets here as required be the specs document */}
        <Video video={vfile0} videoRef={el => this.videoElement = el}/>
        {this.showText()}
      </div>
    )
  }
}
