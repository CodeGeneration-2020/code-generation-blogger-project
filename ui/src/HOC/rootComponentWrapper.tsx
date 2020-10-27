import React from 'react';
import Header from '../app/components/shared/header';
import Footer from '../app/components/shared/footer';
import Loader from '../loader/component/loader.component';

const RootComponentHOC = RootComponent => props => {
  return (
    <React.Fragment>
      <Header />
      <RootComponent {...props} />
      <Footer />
      <Loader />
    </React.Fragment>
  );
};

export default RootComponentHOC;
