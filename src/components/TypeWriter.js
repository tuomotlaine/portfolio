import React, { Component } from 'react';

class TypeWriter extends Component {

  constructor(props){
    super(props);
    this.state = {
      output: '',
      input: props.input.split(''),
      key: 0,
      done: false,
      informedParentOfReady: false
    };
  }

  addCharToOutput(c){
    let newOutput = this.state.output + c;
    let newKey = this.state.key + 1;
    this.setState({
      output: newOutput,
      key: newKey
    });

  }

  componentDidMount(){
    const { input, key } = this.state;
    this.addCharToOutput(input[key]);
  }

  componentDidUpdate(prevProps, prevState){
    
    if(prevState.key != this.state.key && this.state.key < this.state.input.length){

      setTimeout(() => {
          this.addCharToOutput(this.state.input[this.state.key])
      }, this.props.speed);
    }else{
      if(!this.state.informedParentOfReady){
        this.props.onReady();
        this.setState({
          done: true,
          informedParentOfReady: true
        });
      }
    }
  }

  render() {
    return(
      <p className="typewriter-text">{this.state.output}<span className={this.state.done ? 'hide' : 'flash'}>_</span></p>
    );
  }
}

TypeWriter.propTypes = {
  input: React.PropTypes.string.isRequired,
  speed: React.PropTypes.number.isRequired,
  onReady: React.PropTypes.func.isRequired
};

TypeWriter.defaultProps = {
  input: 'You forgot to input some text brah.',
  speed: 60
};

export default TypeWriter;
