import App from 'next/app';
import React from 'react';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import { ThemeProvider } from 'styled-components';

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
