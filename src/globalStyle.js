
/*
import { injectGlobal } from 'styled-components';
import { light as theme } from './themes'

eslint-disable no-unused-expressions
injectGlobal`
  body,html{
    margin:0;

    @font-face {
      font-family: 'WeTheCurious';
      font-style: normal;
      font-weight: 400;
      src: local('WeTheCurious'), local('WeTheCurious-Light'), url(http://localhost:3000/fonts/latest/light) format('woff2');
    }

    @font-face {
      font-family: 'WeTheCurious';
      font-style: normal;
      font-weight: 400;
      src: local('WeTheCurious'), local('WeTheCurious-Regular'), url(http://localhost:3000/fonts/latest/regular) format('woff2');
    }

    @font-face {
      font-family: 'WeTheCurious';
      font-style: normal;
      font-weight: 400;
      src: local('WeTheCurious'), local('WeTheCurious-Bold'), url(http://localhost:3000/fonts/latest/bold) format('woff2');
    }

    @font-face {
      font-family: 'WeTheCurious';
      font-style: normal;
      font-weight: 400;
      src: local('WeTheCurious'), local('WeTheCurious-Heavy'), url(http://localhost:3000/fonts/latest/heavy) format('woff2');
    }
  }
  html{
      background-color:'black';
  }
`
/* eslint-enable */
