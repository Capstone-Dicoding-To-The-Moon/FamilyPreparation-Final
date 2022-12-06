import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CiSearch } from 'react-icons/ci';
import Styles from '../styles/SearchComponent.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';

const SearchElement = ({ setKonten, dataAwal, path }) => {
  let endPointSearch = '';
  if (path === 'artikel') {
    endPointSearch = 'search-post';
  } else if (path === 'forum') {
    endPointSearch = 'search-forum';
  }

  const router = useRouter();

  const click = async (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    if (value !== '') {
      const update = await axios.get(`http://localhost:5000/${endPointSearch}/${value}`).then((res) => res.data.data);
      setKonten(update);
    } else {
      setKonten(dataAwal);
    }
  };

  return (
    <div>
      <Form className="d-flex" onSubmit={click}>
        <Form.Control type="search" placeholder="Silahkan Masukan Kata Kunci ..." className="me-1" aria-label="Search" name="search" />
        <Button className={`${Styles.btnColor}`} type="submit">
          <CiSearch className={`${Styles.icon}`} />
        </Button>
      </Form>
    </div>
  );
};

export default SearchElement;
