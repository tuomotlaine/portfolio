import React, { Component } from 'react';

class Prompt extends Component {
  constructor(props){
    super(props);
  }

  handleClick(args){
    this.props.userSelected(args);
  }

  render(){
    return(
      <div className="row">
        <div className="col-xs-12 text-xs-center">
          <p><a onClick={() => {this.handleClick('Intro')}} className="option">Option 1</a></p>
          <p><a className="option">Option 2</a></p>
          <p><a className="option">Option 3</a></p>
          <p><a className="option">Option 4</a></p>
        </div>
      </div>
    );
  }
}

export default Prompt;
