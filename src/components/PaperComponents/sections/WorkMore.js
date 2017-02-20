import React, { Component } from 'react';
import TypeWriter from '../../TypeWriter';
import RenderComputer from '../../RenderComputer';
import Prompt from '../Prompt';

class WorkMore extends Component {

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
            <TypeWriter speed={20} input="-- Latest work continued --" onReady={this.renderComputer.bind(this)}
            fontSize="1.1rem"
            addClass="text-xs-center"/>
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12 col-md-4">
            <img className="img-fluid" src="assets/images/rentle.png" alt="Mobile Electric Logo"/>
            <figcaption className="text-xs-center">Rentle</figcaption>
          </div>
          <div className="col-xs-12 col-md-8">
            <TypeWriter speed={20} input="<a href='https://www.rentle.co' target='_blank'>Rentle</a> <br /> ----- <br /> The website is little out-dated at the moment, but we are currently developing the solution towards a POR (Point of Rent) solution, which we will beta test with Mobile Electric. My works in this project include: <br /><br />-Business/Service design <br />-Graphic design <br />-Front-end coding with React.js and React-Native <br />-Partnership &amp; Customer relationship building" onReady={this.renderComputer.bind(this)}/>
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>

          <div className="col-xs-12">
            <TypeWriter speed={20} input="My thesis <br /> ----- <br /> The work is supervised by the great Risto Sarvas, with whom we decided to tackle the challenges that young entrepreneurs such as I face. My goal is to build an understanding of the holy triangle of Investors, Entreprenurs and the Customer - and find out if service creation methodologies such as <a href='https://www.leanservicecreation.com' target='_blank'>LSC</a> could help pre-seed start-ups to reach problem-solution fit more effectively." onReady={this.renderComputer.bind(this)}/>
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="I hope that this gave you some kind of understanding. What would you like to ask then?" onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <Prompt userSelected={(args) => {this.props.nextSection(args)}}
        prompts={{
          Who: 'Okey. How do you work and what are you like?',
          WhoMore: 'Tell me more about you ',
          Photos: 'Show me some of the photos you have taken',
          Contact: 'How can I contact you?'
        }}
        />
      </RenderComputer>
    );
  }
}

export { WorkMore };
