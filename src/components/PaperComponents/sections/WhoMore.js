import React, { Component } from 'react';
import TypeWriter from '../../TypeWriter';
import RenderComputer from '../../RenderComputer';
import Prompt from '../Prompt';

class WhoMore extends Component {

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
        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Something more... <br/> ------" onReady={this.renderComputer.bind(this)}
            fontSize="1.1rem" />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Professionally I would say that I am a generalist - someone who knows a little bit of everything. Look at this awesome ASCII chart to get an idea on which project phases I am most intereted in:" onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12" style={{paddingBottom: '20px'}}>
            <TypeWriter addClass="text-xs-center monospace" speed={20}
            input="5   -                         <br />4   *      -                  <br />3   *      *       -          <br />2   *      *       *          <br />1   *      *       *       -  <br />0---*------*-------*-------*--<br />Service  UX/UI   Front-  Back-<br />Design           end     end  <br />  " onReady={this.renderComputer.bind(this)} />
            <figcaption className="text-xs-center">These are my interest-levels.</figcaption>
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Other than professionally I like to spend my free time by going to the gym, practicing screen-writing (my newest hobby), having a beer with friends and trying to educate myself on relevant topics. <br /><br /> If you want to know even more, contact me via e-mail or phone so we can go for a cup of coffee." onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="I don't know why, but I love that ASCII graph! So what would you like to ask then?" onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <Prompt userSelected={(args) => {this.props.nextSection(args)}}
          prompts={{
            Music: 'Just one more... What kind of music do you like?',
            Work: 'Show me your latest work',
            Contact: 'How can I contact you?'
          }}
        />
      </RenderComputer>
    );
  }
}

export { WhoMore };
