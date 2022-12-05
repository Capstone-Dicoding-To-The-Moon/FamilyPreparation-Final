import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';
import styles from '../../styles/Layout/LayoutComponent.module.css';

export default function Layout({ children }) {
  return (
    <>
      <NavbarComponent />
      <main className={`${styles.main} p-4`}>{children}</main>
      <FooterComponent />
    </>
  );
}
