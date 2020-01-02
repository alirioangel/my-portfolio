import App from './node_modules/next/app';
import React from './node_modules/react';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import { ThemeProvider } from './node_modules/styled-components';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
