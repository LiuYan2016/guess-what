import React, { Component } from 'react';
import type { Output } from '../Types';

//Import relevant components as required by specs document here
import {Video} from '../../components/Video';
import {problems} from '../../components/problems';
/* Import Assets as required by specs document
ex.
import asset from '../../assets/asset.png';
*/
import vfile0 from '../../assets/video.mp4';

// Import CSS here
import '../css/View3.css';

type Props = {
  output: Output
}

export class View3 extends Component {
  props: Props;

  constructor(props: Props){
    super(props);

    this.state = {
      result: "",
      color: ""
    }

    this.setResult = this.setResult.bind(this);
  }

  componentDidMount(){
    this.setResult();
  }
  
  setResult(){
    let curProblem = problems[this.props.output.problemNo];
    if (curProblem.answer === this.props.output.selected) {
      this.setState({result: "YOU WON!", color: "green"})
    } else {
      this.setState({result: "You lose", color: "red"})
    }
  }

  render() {
    console.log(this.props.output)
    return (
      <div className="viewContainer justifyCenter">
        <div className="result" style={{color: this.state.color}}>{this.state.result}</div>
        <Video video={vfile0} videoRef={el => this.videoElement = el}/>
        <div className="selected-item" style={{backgroundColor: this.state.color}}><span className="abc">{this.props.output.letterIndex}.</span> {this.props.output.selected}</div>
        <div className="view3-button-part">
          <div id="view3button" onClick={this.props.onClick}>NEXT</div>
        </div>
      </div>
    )
  }
}
