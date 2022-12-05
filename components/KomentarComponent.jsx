import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import alert from '../utils/alert';

const KomentarComponent = ({ datas, id }) => {
  const [token, setToken] = useState(null);
  const [komentar, setKomentar] = useState([]);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setKomentar(datas);
  }, []);

  const clickAddKomentar = async (e) => {
    e.preventDefault();
    const value = document.querySelector('[name="komentar"]').value;
    if (value === '') {
      alert('error', 'komentar tidak boleh kosong');
    } else {
      // push komentar

      // get all komentar
      const komentarUpdate = await axios.get(`http://localhost:5000/postsCom/${id}`).then((res) => res.data.data.komentar);

      alert('success', 'Komentar berhasil dikirim');
      setKomentar(komentarUpdate);
    }
  };

  return (
    <>
      <div className="mt-3">
        <div className="border p-3 rounded mb-3">
          <Row className="mt-3 align-items-start">
            <Col xs={12} className=" align-self-center">
              <InputGroup className="mb-3">
                {token ? (
                  <>
                    <Form.Control placeholder="Masukan komentar anda ..." aria-label="Recipient's username" name="komentar" aria-describedby="basic-addon2" required />
                    <Button variant="outline-secondary" id="button-addon2" onClick={(e) => clickAddKomentar(e)}>
                      Button
                    </Button>
                  </>
                ) : (
                  <>
                    <Form.Control placeholder="Masukan komentar anda ..." name="komentar" aria-label="Recipient's username" aria-describedby="basic-addon2" disabled />
                    <Button variant="outline-secondary" id="button-addon2" disabled>
                      Button
                    </Button>
                  </>
                )}
              </InputGroup>
            </Col>
          </Row>
        </div>

        {komentar.map((data, idx) => {
          return (
            <div className="border p-3 rounded mb-3" key={idx}>
              <div className="d-flex justify-content-between mb-3 border-bottom">
                <h3 className="fs-4">{data.author}</h3>
                <p>{data.createdAt}</p>
              </div>
              <p style={{ fontSize: '13px' }}>{data.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default KomentarComponent;
