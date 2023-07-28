import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'leaflet/dist/leaflet.css';
import './global.styles.scss';

const messages = {
  latitude: 'Latitude',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider messages={messages} locale="en" defaultLocale="en">
      <App />
    </IntlProvider>
  </React.StrictMode>,
);
