import React, { Component } from 'react';

class SideNav extends Component {

  constructor(props){
    super(props);
    this.state = {
      left: '-122px'
    }
  }

  handleScroll(){
    let pos = -122 + document.body.scrollTop/2.5;
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
      left: this.state.left,
      top: 0,
      height: '320px'
    };

    return(
      <div style={sideNavStyle}>
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
            <a href="" className="social-link linkedin"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
          </div>
          <div className="col-xs-12 text-xs-center" style={{ paddingTop: '24px' }}>
            <a href="" className="social-link medium"><i className="fa fa-medium fa-2x" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
