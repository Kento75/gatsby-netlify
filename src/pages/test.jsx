import React from 'react';
import {navigate} from 'gatsby';

// components
import Header from '../components/Header';

const Test = () => {
  return (
    <div>
      <Header title="Header of our test page" />
      <h1>This is a test page!</h1>
      <h1>This is a test page!</h1>
      <button onClick={() => navigate ('/')}>
        Navigate To Homepage
      </button>
    </div>
  );
};

export default Test;
