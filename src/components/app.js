import React, { Component } from 'react';
import Header from './Header';
import Paper from './PaperComponents/Paper';

export default class App extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Header />
        <Paper />
      </div>
    );
  }
}
