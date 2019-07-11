import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

// SEO
import SEO from '../components/SEO';

const PrimaryLayout = props => (
  <div>
    <SEO />
    <Header title="Header of index page" />
    <div className="container">
      <div className="row justify-content-md-center">
        <div className={props.column}>
          {props.children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrimaryLayout;
