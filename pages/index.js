import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardCategoriesComponent from '../components/card/CardCategoriesComponent';
import CardArtikelComponent from '../components/CardArtikelComponent';
import CarouselComponent from '../components/CarouselComponent';
import Styles from '../styles/Home.module.css';
import ListArtikelComponent from '../components/ListArtikelComponent';
import CardSliderComponent from '../components/CardSliderComponent';

const Home = (props) => {
  const getDataAllProduct = props.allProduct;
  const getDataAllCategories = props.allCategories;

  return (
    <Container className="py-3" style={{ minHeight: '100vh' }}>
      <CarouselComponent />

      <section className="my-3">
        <h1 style={{ color: '#a34a23' }}>Artikel Terbaru</h1>
        <div className={`${Styles.underline} mx-auto mb-4`}></div>
        <CardSliderComponent />
      </section>

      <section>
        <h1 style={{ color: '#a34a23' }}>Artikel</h1>
        <div className={`${Styles.underline} mx-auto mb-4`}></div>
        <Row>
          <Col lg={9}>
            <CardArtikelComponent dataArtikel={getDataAllProduct} />
          </Col>
          <Col>
            <ListArtikelComponent dataArtikel={getDataAllCategories} title={'Top Artikel'} />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

Home.getInitialProps = async (ctx) => {
  let res = await fetch('https://fakestoreapi.com/products');
  const allProduct = await res.json();

  res = await fetch('https://fakestoreapi.com/products/categories');
  const allCategories = await res.json();

  const currentRoute = ctx.query;
  return { allProduct: allProduct, allCategories: allCategories, currentRoute: currentRoute };
};

export default Home;
