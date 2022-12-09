import { Button, Container } from 'react-bootstrap';
import SearchElement from '../../components/SearchComponent';
import { useState, useEffect } from 'react';
import HeroElement from '../../components/HeroComponent';
import CardArtikelComponent from '../../components/CardArtikelComponent';
import Styles from '../../styles/artikel/artikelPage.module.css';
import KategoriArtikelComponent from '../../components/KategoriArtikelComponent';
import Head from 'next/head';
import Link from 'next/link';
import { getAPI_URL } from '../../utils/konstanta';

const Artikel = ({ allArtikel, allCategories, queryCheck }) => {
  console.log(queryCheck);
  const [dataArtikel, setDataArtikel] = useState([]);
  useEffect(() => {
    const getDataArtikel = () => {
      setDataArtikel(allArtikel);
    };
    getDataArtikel();
  }, []);

  const changeDataArtikel = (data) => {
    setDataArtikel(data);
  };

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
                  <div className={`${Styles.contentHeader}`}>
                    <h1 className={`${Styles.mainHeading}`}>Rekomendasi Artikel</h1>
                  </div>
                  <div className={`${Styles.search} m-2`}>
                    <SearchElement setKonten={changeDataArtikel} dataAwal={allArtikel} path="artikel" />
                  </div>
                </div>
              </div>

              <div className={`${Styles.underline} mx-auto mb-4`}></div>

              <main className={`${Styles.mainContent}`}>
                <div className={`${Styles.content}`}>
                  {dataArtikel.length !== 0 ? (
                    <CardArtikelComponent dataArtikel={dataArtikel} />
                  ) : (
                    <>
                      {' '}
                      <img src="./404 Error-pana.svg" height={'340px'} width={'100%'}></img> <h1 className="text-center fs-3">Maaf artikel yang anda cari tidak ditemukan</h1>
                    </>
                  )}
                </div>
                <aside className={`${Styles.aside}`}>
                  <Link href="artikel/buatArtikel">
                    <Button className={`${Styles.postButton} border rounded d-block mb-3`} style={{ width: '100%' }} variant="primary">
                      Post Artikel
                    </Button>
                  </Link>
                  <KategoriArtikelComponent dataKategori={allCategories} setKonten={changeDataArtikel} />
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
  const url = getAPI_URL();
  console.log(url);
  const allArtikel = await fetch(`${url}/posts`)
    .then((res) => res.json())
    .then((res) => res.data);

  const allCategories = await fetch(`${url}/categories`)
    .then((res) => res.json())
    .then((res) => res.data);

  const test = ctx.query;
  return {
    allArtikel: allArtikel,
    allCategories: allCategories,
    queryCheck: url,
  };
};

export default Artikel;
