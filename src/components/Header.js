import React, { Component } from 'react';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      top: '0px'
    }
  }

  handleScroll(){
    let pos = document.body.scrollTop/2;
    this.setState({
      top: `-${pos}px`
    });
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {

    const headerStyle = {
      paddingTop: '10px',
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
            <p>Service Design / UX / UI / Front-end <br/>
              Lives in Helsinki, Finland</p>
            <p>
              <a href="" className="social-link header linkedin"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
              <a href="" className="social-link header medium"><i className="fa fa-medium fa-3x" aria-hidden="true"></i></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
