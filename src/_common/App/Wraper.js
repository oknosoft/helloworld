import React from 'react';
import Loading from './Loading';

export const Wraper = (Component) => {
  return <React.Suspense fallback={<Loading/>}>
    <Component/>
  </React.Suspense>;
};
