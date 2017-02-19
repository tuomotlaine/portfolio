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

  componentDidUpdate(){

  }

  render() {

    return(
      <RenderComputer renderChild={this.state.renderComputerCounter}>
        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Who am I? <br/> ------" onReady={this.renderComputer.bind(this)}
            fontSize="1.1rem" />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="I am a novice entrepreneur, service designer and prototyping enthusiastic from Helsinki, who enjoys making ideas reality." onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12 col-md-4" style={{paddingBottom: '20px'}}>
            <img className="img-responsive center-block rounded"  src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAgLAAAAJDNjOTdlMzFmLWI3MzMtNDFhOS05NTQyLTNmZTg0Y2VjZjIxOQ.jpg" alt="Image of Tuomo"/>
            <figcaption className="text-xs-center">^ This is me.</figcaption>
          </div>
          <div className="col-xs-12 col-md-8">
            <TypeWriter speed={20} input="I usually start my projects by trying to understand the underlying business and customer problems at hand. For this I use tools like <a target='_blank' href='https://leanservicecreation.com/'>Lean Service Creation.</a> <br /> <br /> The first prototypes I usually build by pen and paper, from which I gradually move to use technologies such as Adobe PS/XD/AI, HTML, CSS, Javascript, Firebase, React.js or React-Native." onReady={this.renderComputer.bind(this)}/>
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="What would you like to know next?" onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <Prompt userSelected={(args) => {this.props.nextSection(args)}}
          prompts={{
            WhoMore: 'Tell me more about you ',
            Work: 'Show me your latest work',
            Contact: 'How can I contact you?'
          }}
        />
      </RenderComputer>
    );
  }
}

export { WhoMore };
