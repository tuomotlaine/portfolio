import React, { Component } from 'react';
import TypeWriter from '../TypeWriter';
import RenderComputer from '../RenderComputer';
import Prompt from './Prompt';

class Intro extends Component {

  constructor(props){
    super(props);
    let autoScrollOffOnDesktop = screen.width < 361 ? true : false;

    const time = new Date();

    this.state = {
      renderComputerCounter: 0,
      initAutoScroll: autoScrollOffOnDesktop,
      timeStamp: `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    }
  }

  renderComputer(){
    let rcc = this.state.renderComputerCounter + 1;
    this.setState({
      renderComputerCounter: rcc
    });
  }

  componentDidUpdate(){

  }


  render() {

    return(
      <RenderComputer renderChild={this.state.renderComputerCounter}
      noAutoScroll={this.state.initAutoScroll}
      >
        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-xs-12">
            <p>{this.state.timeStamp}</p>
            <TypeWriter speed={20} input="Welcome!" onReady={this.renderComputer.bind(this)}
            fontSize="1.1rem"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <TypeWriter speed={20} input="I am Tuomo - a guy who loves to validate ideas/products/services." onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <TypeWriter speed={20} input="What would like to know about me?" onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <Prompt userSelected={(args) => {this.props.nextSection(args)}}

        />
      </RenderComputer>
    );
  }
}

export default Intro;
