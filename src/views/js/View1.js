// @flow
import React, { Component } from 'react';

//Import relevant components as required by specs document here
import { Button } from 'aq-miniapp';

/* Import Assets as required by specs document
ex.
import asset from '../../assets/asset.png';
*/

// Import CSS here
import '../css/View.css';

export class View1 extends Component {
  render() {
    return (
      <div className="viewContainer justifyCenter">
        <Button className="start-button" title="Start" onClick={this.props.onClick}/>
      </div>
    )
  }
}
