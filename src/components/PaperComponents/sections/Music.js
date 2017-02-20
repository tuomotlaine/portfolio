import React, { Component } from 'react';
import TypeWriter from '../../TypeWriter';
import RenderComputer from '../../RenderComputer';
import Prompt from '../Prompt';

class Music extends Component {

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

  }

  render() {

    return(
      <RenderComputer renderChild={this.state.renderComputerCounter}>
        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Some tunes! <br/> ------" onReady={this.renderComputer.bind(this)}
            fontSize="1.1rem" />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Here is a playlist for you. They are some of the songs I've been listening to lately. Hopefully there is at least one song for you." onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <iframe className="spotify" src="https://embed.spotify.com/?uri=spotify:user:fruitfaffel:playlist:7dwVgFVlINDwV2EuhF8kmM" width="280" height="380" frameBorder="0" allowTransparency="true"></iframe>
          </div>
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
            Contact: 'Could you show me your contact info?'
          }}
        />
      </RenderComputer>
    );
  }
}

export { Music };
