import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { toggleAutoScroll } from '../../actions';

class Prompt extends Component {
  constructor(props){
    super(props);
  }

  handleClick(args){
    this.props.userSelected(args);
    this.props.toggleAutoScroll(true);
  }

  render(){
    return(
      <div className="row" style={{paddingTop: '20px'}}>
        <div className="col-xs-12 text-xs-center">
          {_.map(this.props.prompts, (v, k) => {
              let uniqueKey = v + k + new Date().getTime;
              return (
                <p key={uniqueKey}><a onClick={() => {this.handleClick(`${k}`)}} className="option">{v}</a></p>
              );
          })
          }
          <p className="text-xs-center">***</p>
        </div>
      </div>
    );
  }
}

Prompt.propTypes = {
  prompts: React.PropTypes.object.isRequired
};

Prompt.defaultProps = {
  prompts: {
    Who: 'Tell me about Tuomo',
    Work: 'Show me your latest work',
    Contact: 'How can I contact you?'
  }
};



export default connect(null, { toggleAutoScroll })(Prompt);
