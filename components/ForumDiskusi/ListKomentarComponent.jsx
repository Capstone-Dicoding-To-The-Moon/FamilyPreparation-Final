import { Row, Col, Card } from 'react-bootstrap';
import { BsChatLeftText, BsChevronUp, BsChevronDown } from 'react-icons/bs';

const ListKomentarComponent = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((data, idx) => {
        return (
          <>
            {idx !== 0 ? (
              <Row>
                <Col md={1}>
                  <img src="/profile.png" className="img-fluid" style={{ width: 70, margin: 12 }}></img>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <h5 className="card-title">{data.author}</h5>
                    <Card.Subtitle className="mb-3 text-muted">
                      <span style={{ marginRight: 20 }}>{data.createdAt.split('T')[0]} </span>
                    </Card.Subtitle>
                    <Card.Text>{data.content}</Card.Text>

                    <Card.Subtitle className="mb-3 mt-3 text-muted">
                      <Card.Link style={{ textDecoration: 'none', color: 'black' }}>
                        <BsChevronUp className='me-2' /> {data.vote}
                      </Card.Link>
                      <Card.Link style={{ textDecoration: 'none', color: 'black' }}>
                        <BsChevronDown /> 
                      </Card.Link>
                    </Card.Subtitle>
                  </Card.Body>
                </Col>
              </Row>
            ) : (
              ''
            )}
          </>
        );
      })}
    </>
  );
};

export default ListKomentarComponent;
