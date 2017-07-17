import React, { Component } from 'react';
import type { Output } from '../Types';

import {Background} from 'aq-miniapp';

//Import relevant components as required by specs document here
import {Video} from '../../components/Video';
import {problems} from '../../components/problems';
import {TapButton} from '../../components/TapButton';
/* Import Assets as required by specs document
ex.
import asset from '../../assets/asset.png';
*/
import nextbtn from '../../assets/next_button.png';
import bg from '../../assets/When-Reality-Strikes-bg.jpg';

// Import CSS here
import '../css/View3.css';

type Props = {
  output: Output
}

export class View3 extends Component {
  props: Props;
  won = false;
  curProblem = null;
  videoElement = null;

  constructor(props: Props){
    super(props);

    this.state = {
      result: "",
      color: ""
    }
    this.won = false;
    this.curProblem = problems[props.output.problemNo];

    this.setResult = this.setResult.bind(this);
  }

  componentDidMount(){
    this.setResult();

    let stopPosition = this.curProblem.pausePosition;
    if (this.videoElement){

      this.videoElement.addEventListener("loadstart", function(event){
        this.className += " loading";
      });

      this.videoElement.currentTime = stopPosition;
      this.videoElement.addEventListener('loadedmetadata', function(event) {
        this.className -= " loading";
        this.currentTime = stopPosition;
      }, false);
      if (this.won === true)
        this.videoElement.play();
    }
  }
  
  setResult(){
    let answer = this.curProblem.choices[this.curProblem.answer];
    console.log(this.curProblem.answer, this.curProblem.choices);
    console.log(answer, "====", this.props.output.selected)
    if (answer === this.props.output.selected) {
      this.won = true;
      this.setState({result: "YOU WON!", color: "green"})
    } else {
      this.setState({result: "You lose", color: "red"})
    }
  }

  render() {
    console.log(this.props.output)
    return (
      <div className="viewContainer">
        <Background
          image={bg}
        />
        <div className="result" style={{color: this.state.color}}>{this.state.result}</div>
        <Video video={this.curProblem.video} videoRef={el => this.videoElement = el}/>

        <div className="wrapper">
          <div className="selected-item" style={{backgroundColor: this.state.color}}><span className="abc">{this.props.output.letterIndex}.</span> {this.props.output.selected}</div>
        </div>

        <div className="view3-button-part">
          <TapButton onReleased={() => {this.videoElement.pause(); this.props.onClick()}} btnImg={`url(${nextbtn})`} />
        </div>
      </div>
    )
  }
}
