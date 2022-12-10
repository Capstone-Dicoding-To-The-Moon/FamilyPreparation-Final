import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';
import styles from '../../styles/Layout/LayoutComponent.module.css';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <NavbarComponent />
      <main className={`${styles.main} p-4`} style={{ backgroundColor: '#FFFAE7' }} id="main">
        {children}
      </main>
      <FooterComponent />
    </>
  );
}
