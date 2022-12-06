import { Row, Col, Card, InputGroup, Button } from 'react-bootstrap';
import { BsChatLeftText, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';

const InputKomentarComponent = () => {
  const currentDate = new Date().toJSON().slice(0, 10);
  return (
    <Row>
      <Col md={1}>
        <img src="/profile.png" className="img-fluid" style={{ width: 70, margin: 12 }}></img>
      </Col>
      <Col md={11}>
        <Card.Body>
          <h5 className="card-title">Nama user</h5>
          <Card.Subtitle className="mb-3 text-muted">
            <span style={{ marginRight: 20 }}>{currentDate}</span>
          </Card.Subtitle>
          <InputGroup>
            <Form.Control placeholder="Masukan komentar anda ..." aria-label="Recipient's username" name="komentar" aria-describedby="basic-addon2" required />
            <Button variant="outline-secondary" id="button-addon2" onClick={(e) => clickAddKomentar(e)}>
              Button
            </Button>
          </InputGroup>
        </Card.Body>
      </Col>
    </Row>
  );
};

export default InputKomentarComponent;
