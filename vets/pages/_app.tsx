import '../styles/globals.css'
import type { AppProps } from 'next/app'


import Head from 'next/head';
import { AppShell, MantineProvider } from '@mantine/core';
import AppShellExample from '../components/VetsAppShell';
import VetsAppShellLink from '../components/VetsAppShellLink';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Amigos Vets</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
       
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
          fontFamily: 'Open Sans, sans-serif,Georgia serif',
          colors: {
            'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
            'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
          },

        }}
      >
        
        <Component {...pageProps} />
        <VetsAppShellLink/>
      </MantineProvider>
    </>
  );
}