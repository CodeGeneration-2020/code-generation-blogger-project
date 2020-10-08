import React from 'react';
import { connect } from 'react-redux';
import { ComponentType } from 'react';

type Props = {};
type Omit<T, K extends string> = Pick<T, Exclude<keyof T, K>>;

function ThemeHOC<P extends Props>(
  Component: ComponentType<P>,
): ComponentType<Omit<P, keyof Props>> {
  const Child = (props: any) => {
    return <Component {...props} />;
  };
  return connect((state: any) => {
    const { SHARED_DATA_REDUCER } = state;
    return { theme: SHARED_DATA_REDUCER.theme };
  }, null)(Child);
}

export default ThemeHOC;
