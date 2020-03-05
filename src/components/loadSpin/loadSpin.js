/* eslint-disable no-unused-vars */
import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

import './loadSpin.scss';

const LoadingIndicator = props => {
  // const { promiseInProgress, } = usePromiseTracker();
  // return promiseInProgress && (
  return (
    <div className='loader'>
      {/* <Loader type="ThreeDots" color="#204160" /> */}
      <Loader type="ThreeDots" color="#204160" promiseTracker={usePromiseTracker} />
    </div>
  );
};

export default LoadingIndicator;
