import React, { Component } from 'react';
import Intro from './Intro';

class Paper extends Component {
  render() {
    return(
      <div className="paper">
        <div className="row">
          <div className="address col-xs-12 text-xs-center">
            <p>tuomo(at)tuomolaine.com</p>
          </div>
        </div>
        <div className="row">
          <div className="fade-in col-xs-12">
            <p>FADE IN:</p>
          </div>
        </div>
        <Intro />
      </div>
    );
  }
}

export default Paper;
