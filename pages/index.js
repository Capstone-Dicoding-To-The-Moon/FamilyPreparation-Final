import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CardCategoriesComponent from '../components/card/CardCategoriesComponent';
import CardArtikelComponent from '../components/CardArtikelComponent';
import CarouselComponent from '../components/CarouselComponent';
import axios from 'axios';

const Home = (props) => {
  const getDataAllProduct = props.allProduct;
  const getDataAllCategories = props.allCategories;
  console.log(props.currentRoute);

  return (
    <Container className="py-3">
      <CarouselComponent />
      <div>
        <h1 className="ps-2">Kategori</h1>
        <CardCategoriesComponent dataCategoeries={getDataAllCategories} />
      </div>

      <div>
        <h1 className="pb-3 ps-2">Artikel</h1>
        <CardArtikelComponent dataArtikel={getDataAllProduct} />
      </div>
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
