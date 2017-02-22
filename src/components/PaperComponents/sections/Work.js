import React, { Component } from 'react';
import TypeWriter from '../../TypeWriter';
import RenderComputer from '../../RenderComputer';
import Prompt from '../Prompt';

class Work extends Component {

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

    //document.body.scrollTop = document.body.scrollHeight;
  }

  render() {

    return(
      <RenderComputer renderChild={this.state.renderComputerCounter}>
        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="My latest work <br/> ----------------" onReady={this.renderComputer.bind(this)}
            fontSize="1.1rem" />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="Lately I've been working on two main projects: Mobile Electric and Rentle, which we operate under a company I co-founded called <a href='http://www.vitrine-digital.fi' target='_blank'>Vitrine Digital</a>. I just re-designed and coded the website for ME and Vitrine Digital. Also writing my thesis is taking a bit of my time. The working title is 'How service creation tools &amp; methods help inexperienced pre-seed start ups reach problem-solution fit?'" onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12 col-md-4" style={{paddingBottom: '20px'}}>
            <img className="img-fluid center-block rounded" src="assets/images/mobe_black.png" alt="Mobile Electric Logo"/>
            <figcaption className="text-xs-center">Mobile electric</figcaption>
          </div>
          <div className="col-xs-12 col-md-8">
            <TypeWriter speed={20} input="<a href='https://www.mobileelectric.fi' target='_blank'>Mobile Electric</a> <br /> ----- <br />
            Mobile Electric aims to solve the mobile charging problems of consumers in shopping centers, hotels, bars, events and cities in general. We have done all the code, designs and imported&amp;modified the used power banks. I've contributed on pretty much everything since we were a team of 2 people." onReady={this.renderComputer.bind(this)}/>
          </div>
        </div>
        <Prompt userSelected={(args) => {this.props.nextSection(args)}}
        prompts={{
          WorkMore: 'Tell me about the other projects.',
          Who: 'Actually, tell me who you are?',
          WhoMore: 'Tell me more about you ',
          Photos: 'Show me some of the photos you have taken',
          Contact: 'How can I contact you?'
        }}
        />
      </RenderComputer>
    );
  }
}

export { Work };
