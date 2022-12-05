import 'sweetalert2/src/sweetalert2.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Parentings</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
