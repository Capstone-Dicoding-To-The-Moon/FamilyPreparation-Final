import axios from 'axios';

const baseUrl = 'http://localhost:5000';

// Artikel
const getAllArtikel = async () => {
  const hasil = await axios
    .get(`${baseUrl}/posts`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return hasil;
};

export { getAllArtikel };
