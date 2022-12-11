import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Application } from './application/application';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>
);
