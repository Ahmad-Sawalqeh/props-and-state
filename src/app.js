/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Results from './components/result/result.js';

import './app.scss';

// https://ahmad-sawalqeh.github.io/props-and-state/   link for gh-pages

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: {},
    };
  }

  handleUpdate= (data) => {
    let results = data ;
    this.setState({ results, });
  }

  render(){
    return(
      <React.Fragment>
        <div className="container">
          <Header />
          <Form update={this.handleUpdate} />
          <Results results={this.state.results} />
          <Footer />
        </div>
      </React.Fragment>
    );
  }

}

export default App;
