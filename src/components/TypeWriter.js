import React, { Component } from 'react';

class TypeWriter extends Component {

  constructor(props){
    super(props);
    this.state = {
      output: {__html: ''},
      input: props.input.split(''),
      key: 0,
      done: false,
      informedParentOfReady: false
    };
  }

  addCharToOutput(c){

    let newOutput = this.state.output.__html + c;
    let newKey = this.state.key + 1;
    this.setState({
      output: {__html: newOutput},
      key: newKey
    });

  }

  componentDidMount(){
    const { input, key } = this.state;
    this.addCharToOutput(input[key]);
  }

  componentDidUpdate(prevProps, prevState){
    // document.body.scrollTop = document.body.scrollHeight;
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
      <p className="typewriter-text" style={{fontSize: this.props.fontSize}}><span dangerouslySetInnerHTML={this.state.output}></span><span className={this.state.done ? 'hide' : 'flash'}>_</span></p>
    );
  }
}

TypeWriter.propTypes = {
  input: React.PropTypes.string.isRequired,
  speed: React.PropTypes.number.isRequired,
  onReady: React.PropTypes.func.isRequired,
  fontSize: React.PropTypes.string
};

TypeWriter.defaultProps = {
  input: 'You forgot to input some text brah.',
  speed: 60,
  fontSize: '1rem'
};

export default TypeWriter;
