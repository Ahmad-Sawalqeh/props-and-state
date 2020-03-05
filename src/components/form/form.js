/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { trackPromise } from 'react-promise-tracker';

import './form.scss';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiUrl: '',
      method: 'get',
      loading: false,
    };
  }

  handleMethod = (e) => {
    let method = e.target.value;
    this.setState({ method, });
  }

  handleChange = (e) => {
    let apiUrl = e.target.value;
    this.setState({ apiUrl, });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, });
    // console.log('Form loading 1 => ' , this.state.loading);
    this.props.loadingState(true);
    let data = await trackPromise( fetch(this.state.apiUrl)
      .then(result => {
        this.setState({
          loading: false,
        });
        return result.json();
      })
    );
    this.props.loadingState(false);
    this.props.update(data, this.state.apiUrl,);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="address" onChange={this.handleChange} placeholder="API url link ..." ></input>
        <div className="buttons">
          <button value="get" onClick={this.handleMethod}>Get</button>
          <button value="post" onClick={this.handleMethod}>Post</button>
          <button value="put" onClick={this.handleMethod}>Put</button>
          <button value="patch" onClick={this.handleMethod}>Patch</button>
          <button value="delete" onClick={this.handleMethod}>Delete</button>
          <button className='go'>Go!</button>
        </div>
      </form>
    );
  }

}

export default Form;
