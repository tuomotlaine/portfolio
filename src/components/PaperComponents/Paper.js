import React, { Component } from 'react';
import Intro from './Intro';
import BottomAddress from './Bottomaddress';

class Paper extends Component {
  render() {
    return(
      <div className="paper">
        <div className="row">
          <div className="fade-in col-xs-12">
            <p>FADE IN:</p>
          </div>
        </div>
        <Intro />
        <BottomAddress />
      </div>
    );
  }
}

export default Paper;
