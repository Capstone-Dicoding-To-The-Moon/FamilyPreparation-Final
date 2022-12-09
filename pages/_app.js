import 'sweetalert2/src/sweetalert2.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import { getToken } from '../utils/konstanta';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>The Parentings</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="dicoding:email" content="shellyvictory92@gmail.com"></meta>
        <link rel="manifest" href="/manifest/manifest.json" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
