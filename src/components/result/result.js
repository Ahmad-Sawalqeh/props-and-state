/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import './result.scss';

class Results extends Component {

  render() {
    return(
      <main>
        <ReactJson src={this.props.results} />
      </main>
    );
  }

}

export default Results;
