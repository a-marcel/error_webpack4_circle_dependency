import React from 'react';

import { contentPerUrl } from './contentPerUrl';


const TestFile = (props) => {

  console.log("TestFile");

  const {
    url, dirty, dispatch
  } = props;

  if (dirty) {
    dispatch(contentPerUrl(url, { noCache: true }));
  }

  return (
    <div>Works</div>
  );
}

export default TestFile;
