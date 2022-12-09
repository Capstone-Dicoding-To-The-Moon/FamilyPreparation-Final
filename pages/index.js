import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardCategoriesComponent from '../components/card/CardCategoriesComponent';
import CardArtikelComponent from '../components/CardArtikelComponent';
import CarouselComponent from '../components/CarouselComponent';
import Styles from '../styles/Home.module.css';
import ListArtikelComponent from '../components/ListArtikelComponent';
import CardSliderComponent from '../components/CardSliderComponent';
import { getAPI_URL, getToken } from '../utils/konstanta';

const Home = ({ allArtikel, allCategories, artikelNewest }) => {
  if (artikelNewest.length >= 5) {
    artikelNewest.length = 5;
  }

  return (
    <Container className="py-3" style={{ minHeight: '100vh' }}>
      <CarouselComponent />

      <section className="my-3">
        <h1 style={{ color: '#a34a23' }}>Artikel Terbaru</h1>
        <div className={`${Styles.underline} mx-auto mb-4`}></div>
        <CardSliderComponent data={artikelNewest} />
      </section>

      <section>
        <h1 style={{ color: '#a34a23' }}>Artikel Populer</h1>
        <div className={`${Styles.underline} mx-auto mb-4`}></div>
        <Row>
          <Col lg={12}>
            <CardArtikelComponent dataArtikel={allArtikel} />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

Home.getInitialProps = async (ctx) => {
  const url = getAPI_URL();

  const allArtikel = await fetch(`${url}/posts`)
    .then((res) => res.json())
    .then((res) => res.data);

  const allCategories = await fetch(`${url}/categories`)
    .then((res) => res.json())
    .then((res) => res.data);

  const artikelNewest = await fetch(`${url}/postsDates`)
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    allArtikel: allArtikel,
    allCategories: allCategories,
    artikelNewest: artikelNewest,
  };
};

export default Home;
