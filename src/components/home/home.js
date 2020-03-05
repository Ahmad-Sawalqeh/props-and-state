/* eslint-disable no-unused-vars */
import React from 'react';
import Form from '../form/form.js';
import Results from '../result/result.js';
import { If, Then, Else } from '../if/index.js';

import LoadingSpinner from '../loadSpin/loadSpin.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      urls: [],
      results: {},
      hitApiAgain: '',
      loading: false,
    };
    // console.log('Home hitApiAgain => ', this.state.hitApiAgain);
  }

  handleUpdate= (data, apiUrl) => {
    let results = data;
    // let loading = !loadings;
    let urls = [...this.state.urls, apiUrl];
    this.setState({ urls, results, });
    this.props.history(this.state.urls);
    // console.log('Home loading => ',this.state.loading);
  }

  handleLoading = (loadings) => {
    let results = {};
    let loading = loadings;
    // console.log('Home loadings => ',this.state.loading);
    this.setState({ loading, results, });
  }

  hitagain(val){
    // console.log('Home val => ',val[0]);
    this.setState({ hitApiAgain: val,});
  }

  render() {
    return (
      <div className="container">
        <Form update={this.handleUpdate} loadingState={this.handleLoading} />
        <main>
          <If condition={Object.entries(this.state.results).length > 0} >
            <Then>
              <Results results={this.state.results} hitAgain={this.state.hitApiAgain}/>
            </Then>
            <Else>
              {
                this.state.loading && <LoadingSpinner />
              }
            </Else>
          </If>
        </main>
      </div>
    );
  }
}

export default Home;
