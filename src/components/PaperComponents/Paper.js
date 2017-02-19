import React, { Component } from 'react';
import { Intro, Who, WhoMore, Work } from './sections';
import BottomAddress from './Bottomaddress';



class Paper extends Component {
  constructor(props){
    super(props);
    this.state = {
      components: []
    }
  }

  handleSelect(args){

    if(args === 'Who'){
      let newState = this.state.components;
      newState.push(<Who nextSection={this.handleSelect.bind(this)} key={new Date().getTime()} />);
      this.setState({
        components: newState
      });
    } else if(args === 'Work'){
      let newState = this.state.components;
      newState.push(<Work nextSection={this.handleSelect.bind(this)} key={new Date().getTime()} />);
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
