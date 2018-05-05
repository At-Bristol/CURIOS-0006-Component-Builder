import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, injectGlobal } from 'styled-components'

import App from './App';
import { light as theme } from './themes'

/* eslint-disable no-unused-expressions */
injectGlobal`
  body,html{
    margin:0;
  }
  html{
      background-color:${theme.backgroundColor};
  }
`
/* eslint-enable */

const ProvidedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ ThemeProvider>
)

ReactDOM.render(<ProvidedApp />, document.getElementById('root'));
