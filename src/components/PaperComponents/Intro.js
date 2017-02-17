import React, { Component } from 'react';
import TypeWriter from '../TypeWriter';
import RenderComputer from '../RenderComputer';

class Intro extends Component {

  constructor(props){
    super(props);
    this.state = {
      renderComputerCounter: 0
    }
  }

  renderComputer(){
    let rcc = this.state.renderComputerCounter + 1;
    this.setState({
      renderComputerCounter: rcc
    });
  }

  render() {

    return(
      <RenderComputer renderChild={this.state.renderComputerCounter}>
        <div className="row">
          <div className="fade-in col-xs-12">
            <TypeWriter speed={60} input="I am a guy who loves to validate ideas/products/services." onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="fade-in col-xs-12">
            <TypeWriter speed={60} input="What would like to know about me?" onReady={this.renderComputer.bind(this)}/>
          </div>
        </div>
      </RenderComputer>
    );
  }
}

export default Intro;
