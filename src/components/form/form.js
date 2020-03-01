/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import superagent from 'superagent';
import './form.scss';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiUrl: '',
      method: 'get',
    };
  }

  handleMethod = (e) => {
    let method = e.target.value;
    // console.log('method => ',method);
    this.setState({ method, });
  }

  handleChange = (e) => {
    let apiUrl = e.target.value;
    this.setState({ apiUrl, });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch(this.state.apiUrl);
    let data = await response.json();
    this.props.update(data);
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(this.state.method === 'get'){
  //     superagent
  //       .get(this.state.apiUrl)
  //       .then(data => {
  //         // let readableData = data.json();
  //         // this.props.update(readableData);
  //         this.props.update(data.json());
  //       });
  //   }
  // }

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
