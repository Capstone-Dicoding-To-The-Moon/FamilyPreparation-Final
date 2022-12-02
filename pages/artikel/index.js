import { Button, Container } from 'react-bootstrap';
import SearchElement from '../../components/SearchComponent';
import { useState, useEffect } from 'react';
import HeroElement from '../../components/HeroComponent';
import CardArtikelComponent from '../../components/CardArtikelComponent';
import Styles from '../../styles/artikel/artikelPage.module.css';
import KategoriArtikelComponent from '../../components/KategoriArtikelComponent';
import Head from 'next/head';
import Link from 'next/link';

const Artikel = ({ dataProduct, dataGenre }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Head>
        <title>The Parentings - Artikel</title>
      </Head>
      <Container className="py-3">
        <HeroElement tittle="Artikel" />
        <section className={`${Styles.section}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={`${Styles.mainHeader} mb-3`}>
                  <div className={`${Styles.contentHeader} mb-3`}>
                    <h1 className={`${Styles.mainHeading} m-2`}>Rekomendasi Artikel</h1>
                  </div>
                  <div className={`${Styles.search} m-2`}>
                    <SearchElement />
                  </div>
                </div>
              </div>

              <div className={`${Styles.underline} mx-auto mb-4`}></div>

              <main className={`${Styles.mainContent}`}>
                <div className={`${Styles.content}`}>
                  <CardArtikelComponent dataArtikel={dataProduct} />
                </div>
                <aside className={`${Styles.aside}`}>
                  <Button className={`${Styles.postButton} border rounded d-block mb-3`} variant="primary"> 
                    <Link href="/post">Post Artikel</Link>
                  </Button>
                  <KategoriArtikelComponent dataKategori={dataGenre} />
                </aside>
              </main>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

Artikel.getInitialProps = async (ctx) => {
  const genre = ctx.query.kategori;
  const dataProduct = await fetch(`https://fakestoreapi.com/${genre !== undefined ? `products/category/${genre}` : 'products'}`).then((res) => res.json());
  const dataGenre = await fetch(`https://fakestoreapi.com/products/categories`).then((res) => res.json());

  return {
    dataProduct: dataProduct,
    dataGenre: dataGenre,
  };
};

export default Artikel;
