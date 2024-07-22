import React from 'react';
import Loading from '@oknosoft/ui/dist/App/Loading';

export const Wraper = (Component) => {
  return <React.Suspense fallback={<Loading/>}>
    <Component/>
  </React.Suspense>;
};
