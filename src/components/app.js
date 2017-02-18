import React, { Component } from 'react';
import Header from './Header';
import SideNav from './SideNav';
import Paper from './PaperComponents/Paper';

export default class App extends Component {


  render() {
    return (
      <div className="content-wrapper">
        <Header />
        <Paper />
        <SideNav />
      </div>
    );
  }
}
