import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useRouter } from 'next/router';
import Styles from '../styles/KategoriArtikelComponent.module.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const KategoriArtikelComponent = ({ dataKategori, setKonten }) => {
  const click = async (e, data) => {
    e.preventDefault();
    const update = await axios.get(`https://familypreparation.up.railway.app/postsCat/${data.id}`).then((res) => res.data.data);
    setKonten(update);
  };

  return (
    <div className="card p-3">
      <h3 className={`${Styles.title}`}>Kategori Artikel</h3>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm>
            <Nav variant="pills" className="flex-column btn-group">
              {dataKategori.map((data, idx) => (
                <Nav.Item key={idx}>
                  <Nav.Link
                    onClick={(e) => {
                      click(e, data);
                    }}
                    className={`${Styles.buttonArtikel} B${idx} ${data.id}`}
                  >
                    {data.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default KategoriArtikelComponent;
