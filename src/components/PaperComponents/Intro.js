import React, { Component } from 'react';
import TypeWriter from '../TypeWriter';
import RenderComputer from '../RenderComputer';
import Prompt from './Prompt';

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

  componentDidUpdate(){
  //  document.body.scrollTop = document.body.scrollHeight;
  }

  render() {

    return(
      <RenderComputer renderChild={this.state.renderComputerCounter}>
        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Welcome!" onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <TypeWriter speed={20} input="I am a guy who loves to validate ideas/products/services." onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <TypeWriter speed={20} input="What would like to know about me?" onReady={this.renderComputer.bind(this)}/>
          </div>
        </div>
        <Prompt userSelected={(args) => {this.props.nextSection(args)}}/>
      </RenderComputer>
    );
  }
}

export default Intro;
