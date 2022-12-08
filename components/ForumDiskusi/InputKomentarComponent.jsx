import { Row, Col, Card, InputGroup, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { getHeaders } from '../../utils/konstanta';
import axios from 'axios';
import alert from '../../utils/alert';

const InputKomentarComponent = ({ setKomentar, id, user }) => {
  const currentDate = new Date().toJSON().slice(0, 10);

  const clickKomentar = async (e) => {
    e.preventDefault();
    const dataInput = document.querySelector('[name="komentar"]');
    if (dataInput.value === '') {
      alert('error', 'komentar tidak boleh kosong');
    } else {
      const headers = getHeaders();
      const data = { content: dataInput.value, forumId: id };
      await axios
        .post('https://familypreparation.up.railway.app/komentar_forum', data, headers)
        .then(async () => {
          const komentarUpdate = await axios.get(`https://familypreparation.up.railway.app/forumDis/${id}`).then((res) => res.data.data.komentar);
          setKomentar(komentarUpdate);
          alert('success', 'komentar berhasil ditambahkan');
        })
        .then(() => {
          dataInput.value = '';
        });
    }
  };

  return (
    <Row>
      <Col md={1}>
        <img src="/profile.png" className="img-fluid" style={{ width: 70, margin: 12 }}></img>
      </Col>
      <Col md={11}>
        <Card.Body>
          <h5 className="card-title">{user === undefined ? 'User' : user.name}</h5>
          <Card.Subtitle className="mb-3 text-muted">
            <span style={{ marginRight: 20 }}>{currentDate}</span>
          </Card.Subtitle>
          <InputGroup>
            {user === undefined ? (
              <>
                <Form.Control placeholder="Masukan komentar anda ..." aria-label="Recipient's username" name="komentar" aria-describedby="basic-addon2" required disabled />
                <Button variant="outline-secondary" id="button-addon2" disabled>
                  Button
                </Button>
              </>
            ) : (
              <>
                <Form.Control placeholder="Masukan komentar anda ..." aria-label="Recipient's username" name="komentar" aria-describedby="basic-addon2" required />
                <Button variant="outline-secondary" id="button-addon2" onClick={(e) => clickKomentar(e)}>
                  Button
                </Button>
              </>
            )}
          </InputGroup>
        </Card.Body>
      </Col>
    </Row>
  );
};

export default InputKomentarComponent;
