import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';
import styles from '../../styles/Layout/LayoutComponent.module.css';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest/manifest.json" />
      </Head>

      <NavbarComponent />
      <main className={`${styles.main} p-4`} id="main">
        {children}
      </main>
      <FooterComponent />
    </>
  );
}
