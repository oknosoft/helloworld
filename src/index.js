import React from "react";
import ReactDOM from 'react-dom/client';
import Loading from './aggregate/App/Loading';

const App = React.lazy(() => import('./aggregate/App'));
const Metadata = React.lazy(() => import('./aggregate/Metadata'));

const elm = document.getElementById('root');
const initialText = elm.innerHTML;
const root = ReactDOM.createRoot(elm);
root.render(<React.Suspense fallback={<Loading/>}>
    <Metadata App={App} initialText={initialText} />
  </React.Suspense>);
