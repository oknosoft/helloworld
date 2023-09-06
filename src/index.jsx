import React from "react";
import ReactDOM from 'react-dom/client';
import Loading from './common/App/Loading';

const App = React.lazy(() => import('./common/App'));
const Metadata = React.lazy(() => import('./common/Metadata'));

const elm = document.getElementById('root');
const initialText = elm.innerHTML;
const root = ReactDOM.createRoot(elm);
root.render(<React.Suspense fallback={<Loading/>}>
    <Metadata App={App} initialText={initialText} />
  </React.Suspense>);
