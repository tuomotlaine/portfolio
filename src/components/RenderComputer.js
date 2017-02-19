import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleAutoScroll } from '../actions';

class RenderComputer extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){

    if(this.props.noAutoScroll){
      this.props.toggleAutoScroll(true);
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

RenderComputer.defaultProps = {
  noAutoScroll: true
};

export default connect(null, { toggleAutoScroll })(RenderComputer);
