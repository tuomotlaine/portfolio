import React, { Component } from 'react';
import TypeWriter from '../../TypeWriter';
import RenderComputer from '../../RenderComputer';
import Prompt from '../Prompt';

class Contact extends Component {

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

  getPromptList(){

  }

  render() {

    return(
      <RenderComputer renderChild={this.state.renderComputerCounter}>
        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Contact me: <br/> ------" onReady={this.renderComputer.bind(this)}
            fontSize="1.1rem" />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Let's keep this simple shall we? Just send me an e-mail or give me a call. I would love to hear what's in your mind." onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="<b>My e-mail:</b> tuomo(at)tuomolaine.com <br /><b>My phone:</b> +358 41 505 83 91 <br /> <br />I live in Töölö, if you want to stalk me in real life."  onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <p className="text-xs-center">
              <a href="https://www.linkedin.com/in/tuomo-laine-583a948a/" target="_blank" className="social-link header linkedin"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
              <a href="https://medium.com/@tikilain" target="_blank" className="social-link header medium"><i className="fa fa-medium fa-3x" aria-hidden="true"></i></a>
              <a href="https://github.com/tuomotlaine" target="_blank" className="social-link header github"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
            </p>
            <TypeWriter speed={20} input="***"  addClass="text-xs-center" onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Would you still want to ask something?" onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <Prompt userSelected={(args) => {this.props.nextSection(args)}}
          prompts={{
            Who: 'Tell me about who Tuomo is as a person',
            WhoMore: 'Tell me more about you ',
            Photos: 'Show me some of the photos you have taken',
            Work: 'Show me your latest work',
            WorkMore: 'Tell me about the other projects.',
            Music: 'Can you recommend a song before I leave?'
          }}
        />
      </RenderComputer>
    );
  }
}


export { Contact };
