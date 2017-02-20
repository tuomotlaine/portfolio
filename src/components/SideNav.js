import React, { Component } from 'react';

class SideNav extends Component {

  constructor(props){
    super(props);
    this.state = {
      left: '-200px'
    }
  }

  handleScroll(){
    let pos = -180 + document.body.scrollTop/2.5;
      if(pos <= 0){
      this.setState({
        left: `${pos}px`
      });
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {

    const sideNavStyle = {
      paddingTop: '32px',
      paddingLeft: '32px',
      position: 'fixed',
      width: '200px',
      left: this.state.left,
      top: 0,
      height: '320px'
    };

    return(
      <div style={sideNavStyle} className="hidden-md-down" id="sideNav">
        <div className="logo-side">
          <div className="left-side">
            <span className="logo-letter-side">T</span>
          </div>
          <div className="right-side">
            <span className="logo-letter-side">L</span>
          </div>
        </div>
        <div className="definitions row">
          <div className="col-xs-12 text-xs-center">
            <a href="https://www.linkedin.com/in/tuomo-laine-583a948a/" className="social-link linkedin" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
          </div>
          <div className="col-xs-12 text-xs-center" style={{ paddingTop: '24px' }}>
            <a href="https://medium.com/@tikilain" className="social-link medium" target="_blank"><i className="fa fa-medium fa-2x" aria-hidden="true"></i></a>
          </div>
          <div className="col-xs-12 text-xs-center" style={{ paddingTop: '24px' }}>
            <a href="https://github.com/tuomotlaine" target="_blank" className="social-link github" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
