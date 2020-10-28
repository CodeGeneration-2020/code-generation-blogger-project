import React from 'react';
import Header from '../app/components/shared/header';
import Footer from '../app/components/shared/footer';

const RootComponentHOC = RootComponent => props => {
  return (
    <React.Fragment>
      <Header />
      <RootComponent {...props} />
      <Footer />
    </React.Fragment>
  );
};

export default RootComponentHOC;
