import React, { Component } from 'react';
import _ from 'underscore';

class RenderComputer extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  renderChildrenOneByOne(){

    let returnObjects = [];

    for(let i = 0; i <= this.props.renderChild; i++){
      returnObjects.push(this.props.children[i]);
    }
    return returnObjects;
  }

  render() {

    return(
      <div>
        {this.renderChildrenOneByOne()}
      </div>
    );
  }
}

export default RenderComputer;
