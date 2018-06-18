import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, injectGlobal } from 'styled-components'

import App from './App';
import { light as theme } from './themes'

/* eslint-disable no-unused-expressions */
injectGlobal`
  body,html{
    margin:0;
    height: 100vh;
    overflow-y: scroll;
    
    font-family:${theme.font.family.regular};

    @font-face {
      font-family: 'WeTheCurious-Light';
      font-style: normal;
      font-weight: 100;
      src: local('WeTheCurious'), local('WeTheCurious-Light'), url(http://localhost:3000/fonts/latest/light) format('woff2');
    }

    @font-face {
      font-family: 'WeTheCurious-Regular';
      font-style: normal;
      font-weight: 400;
      src: local('WeTheCurious'), local('WeTheCurious-Regular'), url(http://localhost:3000/fonts/latest/regular) format('woff2');
    }

    @font-face {
      font-family: 'WeTheCurious-Bold';
      font-style: normal;
      font-weight: 700;
      src: local('WeTheCurious'), local('WeTheCurious-Bold'), url(http://localhost:3000/fonts/latest/bold) format('woff2');
    }

    @font-face {
      font-family: 'WeTheCurious-Heavy';
      font-style: normal;
      font-weight: 900;
      src: local('WeTheCurious'), local('WeTheCurious-Heavy'), url(http://localhost:3000/fonts/latest/heavy) format('woff2');
    }
   
  }
  html{
      background-color:${theme.backgroundColor};
  }
`
/* eslint-enable */

const ProvidedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

ReactDOM.render(<ProvidedApp />, document.getElementById('root'));
