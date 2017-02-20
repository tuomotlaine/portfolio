import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleAutoScroll } from '../actions';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      top: '0px',
      scrollDetection: 0
    }
  }

  handleScroll(e){
    let pos = document.body.scrollTop/2;
    this.setState({
      top: `-${pos}px`
    });

    let newScrollDetection = this.state.scrollDetection + 1;
    setTimeout(() => {
      this.setState({
        scrollDetection: 0
      });
    }, 2000);

    this.setState({
      scrollDetection: newScrollDetection
    });

    if(this.state.scrollDetection > 18){
      this.props.toggleAutoScroll(false);
      this.setState({
        scrollDetection: 0
      });
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', (e) => { this.handleScroll(e)});
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', (e) => { this.handleScroll(e)});
  }

  render() {

    const headerStyle = {
      paddingTop: '32px',
      width: '720px',
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
      WebkitTransform: 'translateX(-50%)',
      top: this.state.top,
      height: '320px',
      zIndex: -900
    };

    return(
      <div className="header" style={headerStyle}>
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
    );
  }
}

export default connect(null, { toggleAutoScroll })(Header);
