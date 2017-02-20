import React, { Component } from 'react';
import TypeWriter from '../../TypeWriter';
import RenderComputer from '../../RenderComputer';
import Prompt from '../Prompt';

class Intro extends Component {

  constructor(props){
    super(props);
    let autoScrollOffOnDesktop = screen.width < 361 ? true : false;

    const convertToTwoDigits = (number) => {return (number < 10 ? '0' : '') + number};

    const time = new Date();
    const date = convertToTwoDigits(time.getDate());
    const month = convertToTwoDigits(time.getMonth() + 1);
    const hours = convertToTwoDigits(time.getHours());
    const minutes = convertToTwoDigits(time.getMinutes());
    const seconds = convertToTwoDigits(time.getSeconds());

    this.state = {
      renderComputerCounter: 0,
      initAutoScroll: autoScrollOffOnDesktop,
      timeStamp: `${date}/${month}/${time.getFullYear()} ${hours}:${minutes}:${seconds}`
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

    const headerStyle = {
      display: 'none',
      paddingTop: '32px',
      width: '720px',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      WebkitTransform: 'translateX(-50%)',
      marginTop: '-400px',
      height: '320px'
    };

    return(
      <div>
        <div className="print-header" style={headerStyle}>
          <div className="logo">
            <div className="left-side">
              <span className="logo-letter">T</span>
            </div>
            <div className="right-side">
              <span className="logo-letter">L</span>
            </div>
          </div>
          <div className="definitions row">
            <div className="col-xs-12 text-xs-center">
              <p>Full-stack Prototypist</p>
              <p className="hidden-xs-down">Service Design / UX / UI / Front-end <br/>
                Lives in Helsinki, Finland</p>
              <p className="hidden-sm-up">Service Design <br/> UX / UI / Front-end <br/>
                Lives in Helsinki, Finland</p>
              <p>
                <a href="https://www.linkedin.com/in/tuomo-laine-583a948a/" target="_blank" className="social-link header linkedin"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
                <a href="https://medium.com/@tikilain" target="_blank" className="social-link header medium"><i className="fa fa-medium fa-3x" aria-hidden="true"></i></a>
                <a href="https://github.com/tuomotlaine" target="_blank" className="social-link header github"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
              </p>
              <p>tuomo(at)tuomolaine.com</p>
            </div>
          </div>
        </div>
        <RenderComputer renderChild={this.state.renderComputerCounter}
        noAutoScroll={this.state.initAutoScroll}
        >
          <div className="row" style={{marginTop: '40px'}}>
            <div className="col-xs-12">
              <p>{this.state.timeStamp}</p>
              <TypeWriter speed={20} input="Welcome!  <br/> ------" onReady={this.renderComputer.bind(this)}
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
              <TypeWriter speed={20} input="What would you like to know about me?" onReady={this.renderComputer.bind(this)} />
            </div>
          </div>
          <Prompt userSelected={(args) => {this.props.nextSection(args)}}

          />
        </RenderComputer>
      </div>
    );
  }
}

export { Intro };
