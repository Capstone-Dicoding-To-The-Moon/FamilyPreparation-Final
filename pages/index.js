import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardCategoriesComponent from '../components/card/CardCategoriesComponent';
import CardArtikelComponent from '../components/CardArtikelComponent';
import CarouselComponent from '../components/CarouselComponent';
import Styles from '../styles/Home.module.css';
import ListArtikelComponent from '../components/ListArtikelComponent';
import CardSliderComponent from '../components/CardSliderComponent';

const Home = ({ allArtikel, allCategories, artikelNewest }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    localStorage.getItem('token');
  }, token);

  artikelNewest.length = 5;

  return (
    <Container className="py-3" style={{ minHeight: '100vh' }}>
      <CarouselComponent />

      <section className="my-3">
        <h1 style={{ color: '#a34a23' }}>Artikel Terbaru</h1>
        <div className={`${Styles.underline} mx-auto mb-4`}></div>
        <CardSliderComponent data={artikelNewest} />
      </section>

      <section>
        <h1 style={{ color: '#a34a23' }}>Artikel</h1>
        <div className={`${Styles.underline} mx-auto mb-4`}></div>
        <Row>
          <Col lg={9}>
            <CardArtikelComponent dataArtikel={allArtikel} />
          </Col>
          <Col>
            <ListArtikelComponent dataArtikel={allCategories} title={'Top Artikel'} />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

Home.getInitialProps = async (ctx) => {
  const url = 'http://localhost:5000';

  const allArtikel = await fetch(`${url}/posts`)
    .then((res) => res.json())
    .then((res) => res.data);

  const allCategories = await fetch(`${url}/categories`)
    .then((res) => res.json())
    .then((res) => res.data);

  const artikelNewest = await fetch(`${url}/postsDates`)
    .then((res) => res.json())
    .then((res) => res.data);

  const currentRoute = ctx.query;

  return {
    allArtikel: allArtikel,
    allCategories: allCategories,
    artikelNewest: artikelNewest,
  };
};

export default Home;
