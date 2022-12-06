import { Row, Col, Card } from 'react-bootstrap';
import { BsChatLeftText, BsChevronUp, BsChevronDown } from 'react-icons/bs';

const ListKomentarComponent = () => {
  return (
    <>
      {[1, 2, 3].map(() => {
        return (
          <Row>
            <Col md={1}>
              <img src="/profile.png" className="img-fluid" style={{ width: 70, margin: 12 }}></img>
            </Col>
            <Col md={8}>
              <Card.Body>
                <h5 className="card-title">Nama Author</h5>
                <Card.Subtitle className="mb-3 text-muted">
                  <span style={{ marginRight: 20 }}>Jum’at 11 November 2022 00:10 </span>
                </Card.Subtitle>
                <Card.Text>
                  Ini Pertanyaan? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur officiis ipsa ab nihil iure nulla quisquam officia. Quibusdam, rerum perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quis quo laudantium ipsam consectetur tempore quidem quas doloribus expedita quia perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, natus earum ut tempore sed voluptatibus repudiandae beatae
                  fugit ratione eligendi.
                </Card.Text>

                <Card.Subtitle className="mb-3 mt-3 text-muted">
                  <Card.Link style={{ textDecoration: 'none', color: 'black' }}>
                    <BsChatLeftText /> Balas
                  </Card.Link>
                  <Card.Link style={{ textDecoration: 'none', color: 'black' }}>
                    <BsChevronUp /> 0
                  </Card.Link>
                  <Card.Link style={{ textDecoration: 'none', color: 'black' }}>
                    <BsChevronDown /> 0
                  </Card.Link>
                </Card.Subtitle>
              </Card.Body>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default ListKomentarComponent;
