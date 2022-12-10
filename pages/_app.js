import 'sweetalert2/src/sweetalert2.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

const START = 10;
const NUMBER_OF_IMAGES = 100;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Parentings</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="dicoding:email" content="dewananda124@gmail.com"></meta>
        <link rel="apple-touch-icon" href="/favicon.png"></link>
        <link rel="manifest" href="/manifest/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
