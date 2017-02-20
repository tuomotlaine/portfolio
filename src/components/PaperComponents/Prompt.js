import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { toggleAutoScroll, addContentToState } from '../../actions';

class Prompt extends Component {
  constructor(props){
    super(props);
  }

  handleClick(args){
    this.props.userSelected(args);
    this.props.toggleAutoScroll(true);
    this.props.addContentToState(args);
  }

  render(){
    console.log(this.props.shownContent);
    return(
      <div className="row" style={{paddingTop: '20px'}}>
        <div className="col-xs-12 text-xs-center">
          {_.map(this.props.prompts, (v, k) => {
              let uniqueKey = v + k + new Date().getTime;

              if( k == 'WhoMore' || k == 'WorkMore' || k == 'Photos'){

                switch(k) {
                  case 'WhoMore':
                    if(!_.includes(this.props.shownContent, 'Who') || _.includes(this.props.shownContent, 'WhoMore')){
                      return;
                    }else {
                      return (<p key={uniqueKey}><a onClick={() => {this.handleClick(`${k}`)}} className="option">{v}</a></p>);
                    }

                  case 'WorkMore':
                    if(!_.includes(this.props.shownContent, 'Work') || _.includes(this.props.shownContent, 'WorkMore')){
                      return;
                    }else{
                      return (<p key={uniqueKey}><a onClick={() => {this.handleClick(`${k}`)}} className="option">{v}</a></p>);
                    }
                  case 'Photos':
                    if(!_.includes(this.props.shownContent, 'WhoMore') || _.includes(this.props.shownContent, 'Photos')){
                      return;
                    }else{
                      return (<p key={uniqueKey}><a onClick={() => {this.handleClick(`${k}`)}} className="option">{v}</a></p>);
                    }
                }
              } else if(k != 'Contact' && !_.includes(this.props.shownContent, k)){
                return (
                  <p key={uniqueKey}><a onClick={() => {this.handleClick(`${k}`)}} className="option">{v}</a></p>
                );
              }else if(k == 'Contact'){
                return (
                  <p key={uniqueKey}><a onClick={() => {this.handleClick(`${k}`)}} className="option">{v}</a></p>
                );
              }
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
  },
  key: new Date().getTime
};

const mapStateToProps = (state) => {
  return {
    shownContent: state.shownContent
  };
};

export default connect(mapStateToProps, { toggleAutoScroll, addContentToState })(Prompt);
