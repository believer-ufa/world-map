import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LocaleContextConsumer, LocaleContextProvider } from '@/context/LocaleContext';

import App from './App';

import 'leaflet/dist/leaflet.css';
import './global.styles.scss';

import messages from './messages';
import { MapPage } from './pages/map';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MapPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocaleContextProvider>
      <LocaleContextConsumer>
        {(context) => (
          <IntlProvider
            defaultLocale={context.locale}
            locale={context.locale}
            messages={messages[context.locale]}
            onError={() => undefined}
          >
            <App>
              <RouterProvider router={router} />
            </App>
          </IntlProvider>
        )}
      </LocaleContextConsumer>
    </LocaleContextProvider>
  </React.StrictMode>,
);
