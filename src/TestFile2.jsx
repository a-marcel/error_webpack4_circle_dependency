import React from 'react';

import { contentPerUrl } from './contentPerUrl';


const TestFile2 = (props) => {

  console.log("TestFile");

  const {
    url, dirty, dispatch
  } = props;

  if (dirty) {
    dispatch(contentPerUrl(url, { noCache: true }));
  }

  return (
    <div>Works2</div>
  );
}

export default TestFile2;
