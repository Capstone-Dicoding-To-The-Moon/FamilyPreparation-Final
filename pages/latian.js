import { useState, useEffect } from 'react';
import CardArtikelComponent from '../components/CardArtikelComponent';
import KategoriArtikelComponent from '../components/KategoriArtikelComponent';

const latian = ({ allArtikel, allCategories }) => {
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

  console.log(dataArtikel);
  return (
    <>
      <h1>Ini hanya untuk latihan</h1>

      <CardArtikelComponent dataArtikel={dataArtikel} />
      <KategoriArtikelComponent dataKategori={allCategories} setKonten={changeDataArtikel} />
    </>
  );
};

latian.getInitialProps = async (ctx) => {
  const url = 'http://localhost:5000';

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
    queryCheck: test,
  };
};

export default latian;
