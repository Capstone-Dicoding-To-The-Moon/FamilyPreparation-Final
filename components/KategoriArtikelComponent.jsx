import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useRouter } from 'next/router';
import Styles from '../styles/KategoriArtikelComponent.module.css';


const KategoriArtikelComponent = ({ dataKategori }) => {
  const router = useRouter();

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
                    onClick={() => {
                      router.push(`?kategori=${data}`);
                    }}
                    className={`${Styles.buttonArtikel} B${idx}`}
                  >
                    {data}
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
