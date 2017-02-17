import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div className="header">
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
              <a href="" className="social-link linkedin"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
              <a href="" className="social-link medium"><i className="fa fa-medium fa-3x" aria-hidden="true"></i></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
