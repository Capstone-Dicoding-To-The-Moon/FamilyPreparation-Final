import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CiSearch } from 'react-icons/ci';
import Styles from '../styles/SearchComponent.module.css';
import { useRouter } from 'next/router';

const SearchElement = ({ getSearch }) => {
  const router = useRouter();
  const click = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    getSearch(value);
    if (value !== '') {
      router.push(`?search=${value}`);
    }else{
      router.push(``);
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
