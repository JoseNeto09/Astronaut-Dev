import { AppProps } from 'next/app';
import '../styles/global.scss';
import { Header } from '../components/Header';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
