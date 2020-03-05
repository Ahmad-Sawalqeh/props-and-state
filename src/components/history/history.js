/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { If, Then, Else } from '../if/index.js';

import './history.scss';

class History extends React.Component {

  render(){
    return(
        <main>
          <If condition={this.props.data.length > 0} >
            <Then>
              <p>These are some of API links that you already use:</p>
              <div>
                <ul>
                  {
                    this.props.data.map((val , idx) => {
                      return (
                        <li>
                          <span>{val}</span>
                          {/* <Link to="/" key={idx} className='onlyhistoryA' onClick={()=> this.props.goToAppHistory(val)}>Hit it again</Link> */}
                          {/* <button className='onlyhistoryB' onClick={()=> this.props.goToAppHistory(val)}>Hit it again</button> */}
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </Then>
            <Else>
              <p>You need to hit some routes to see them here!</p>
            </Else>
          </If>
        </main>
    );
  }

}

export default History;
