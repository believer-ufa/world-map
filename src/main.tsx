import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom/client';

import { LocaleContextConsumer, LocaleContextProvider } from '@/context/LocaleContext';
import App from './App';

import 'leaflet/dist/leaflet.css';
import './global.styles.scss';

import messages from './messages';

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
            <App />
          </IntlProvider>
        )}
      </LocaleContextConsumer>
    </LocaleContextProvider>
  </React.StrictMode>,
);
