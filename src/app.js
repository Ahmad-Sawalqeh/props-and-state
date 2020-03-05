/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './components/home/home.js';
import History from './components/history/history.js';

import './app.scss';

// https://ahmad-sawalqeh.github.io/props-and-state/   link for gh-pages

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      urls: [],
      results: {},
      apiAgain: '',
    };
  }

  handelUpdate(newUrl){
    let urls = [...this.state.urls, newUrl];
    this.setState({ urls, });
    // console.log('App state.urls => ',this.state.urls[0]);
  }

  setStateApi(val){
    this.setState({ againApi : val[0], });
    console.log('App hitApiAgain => ',val[0]);
    // this.props.goToHome(val[0]);
  }

  /*  we can hit these routes:
      "people": "https://swapi.co/api/people/",
      "planets": "https://swapi.co/api/planets/",
      "films": "https://swapi.co/api/films/",
      "species": "https://swapi.co/api/species/",
      "vehicles": "https://swapi.co/api/vehicles/",
      "starships": "https://swapi.co/api/starships/"
  */

  render(){
    return(
      <React.Fragment>
        <div className="container">
          <Header />
          <Route exact path="/">
            <Home history={this.handelUpdate.bind(this)} hitApiAgain={this.state.apiAgain} />
            {/* <Home history={ () => this.handelUpdate() } /> */}
          </Route>
          <Route exact path="/history">
            <History data={this.state.urls} goToAppHistory={this.setStateApi.bind(this)} />
          </Route>
          <Footer />
        </div>
      </React.Fragment>
    );
  }

}

export default App;
