import React, { Component } from 'react';
import Intro from './Intro';
import BottomAddress from './Bottomaddress';



class Paper extends Component {
  constructor(props){
    super(props);
    this.state = {
      components: []
    }
  }

  handleSelect(args){

    if(args === 'Intro'){
      let newState = this.state.components;
      newState.push(<Intro nextSection={this.handleSelect.bind(this)} key={new Date().getTime()} />);
      this.setState({
        components: newState
      });
    }
  }

  renderChildren(){

    let returnObjects = [];
    for(let i = 0; i < this.state.components.length; i++){
      returnObjects.push(this.state.components[i]);
    }

    return returnObjects;
  }



  render() {

    return(
      <div className="paper">
        <Intro nextSection={this.handleSelect.bind(this)}/>
        {this.renderChildren()}
        <BottomAddress />
      </div>
    );
  }
}

export default Paper;
