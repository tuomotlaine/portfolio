import React, { Component } from 'react';
import TypeWriter from '../../TypeWriter';
import RenderComputer from '../../RenderComputer';
import Prompt from '../Prompt';

class Photos extends Component {

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
            <TypeWriter speed={20} input="Some of the photos I've taken: <br/> ------" onReady={this.renderComputer.bind(this)}
            fontSize="1.1rem" />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="I have few photo projects, like Lights of Töölö that I hope to finish soon. Here are couple of photos from Lights of Töölö and my trip to Azores." onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12 col-md-6" style={{paddingBottom: '20px'}}>
            <img className="img-fluid center-block rounded"  src="assets/images/2403-TakaToolo-1.jpg" alt="Image of Ruusula Bowling"/>
            <TypeWriter speed={20} input="Ruusula Bowling" onReady={this.renderComputer.bind(this)}/>
          </div>
          <div className="col-xs-12 col-md-6" style={{paddingBottom: '20px'}}>
            <img className="img-fluid center-block rounded"  src="assets/images/2403-TakaToolo-2.jpg" alt="Image of Restaurant Lehtovaara"/>
            <TypeWriter speed={20} input="Restaurant Lehtovaara" onReady={this.renderComputer.bind(this)}/>
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12 col-md-6" style={{paddingBottom: '20px'}}>
            <img className="img-fluid center-block rounded"  src="assets/images/IMG_1583.jpg" alt="Image of Tommi"/>
            <TypeWriter speed={20} input="My friend Tommi fooling around" onReady={this.renderComputer.bind(this)}/>
          </div>
          <div className="col-xs-12 col-md-6" style={{paddingBottom: '20px'}}>
            <img className="img-fluid center-block rounded"  src="assets/images/IMG_1625.jpg" alt="Abandod Hotel Hall"/>
            <TypeWriter speed={20} input="Hotel Monte Palace" onReady={this.renderComputer.bind(this)}/>
          </div>
          <div className="col-xs-12 col-md-6" style={{paddingBottom: '20px'}}>
            <img className="img-fluid center-block rounded"  src="assets/images/IMG_1628.jpg" alt="Man in Hotel Monte Palace"/>
            <TypeWriter speed={20} input="My friend Akseli in Hotel Monte Palace" onReady={this.renderComputer.bind(this)}/>
          </div>
          <div className="col-xs-12 col-md-6" style={{paddingBottom: '20px'}}>
            <img className="img-fluid center-block rounded"  src="assets/images/IMG_1846.jpg" alt="Waterflow"/>
            <TypeWriter speed={20} input="Azores near the waterfall" onReady={this.renderComputer.bind(this)}/>
          </div>
        </div>
        <div className="row" style={{marginTop: '24px'}}>
          <div className="col-xs-12">
            <TypeWriter speed={20} input="What would you like to know then?" onReady={this.renderComputer.bind(this)} />
          </div>
        </div>
        <Prompt userSelected={(args) => {this.props.nextSection(args)}}
          prompts={{
            Work: 'Show me your latest work',
            Music: 'What kind of music you like?',
            WorkMore: 'Tell me about the other projects.',
            Contact: 'How can I contact you?'
          }}
        />
      </RenderComputer>
    );
  }
}

export { Photos };
