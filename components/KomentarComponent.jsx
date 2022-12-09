import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import alert from '../utils/alert';
import { getHeaders } from '../utils/konstanta';

const KomentarComponent = ({ datas, id }) => {
  const [token, setToken] = useState(null);
  const [komentar, setKomentar] = useState([]);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setKomentar(datas);
  }, [datas]);

  const clickAddKomentar = async (e) => {
    e.preventDefault();
    const komentar = document.querySelector('[name="komentar"]');
    if (komentar.value === '') {
      alert('error', 'komentar tidak boleh kosong');
    } else {
      // push komentar
      const headers = getHeaders();
      const data = { content: komentar.value, postId: id };
      await axios.post('https://familypreparation.up.railway.app/komentar_post', data, headers);
      // get all komentar
      const komentarUpdate = await axios.get(`https://familypreparation.up.railway.app/postsCom/${id}`).then((res) => res.data.data.komentar);
      alert('success', 'komentar berhasil ditambahkan');
      komentar.value = '';
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
                <p>{data.createdAt.split('T')[0]}</p>
              </div>
              <p style={{ fontSize: '16px' }}>{data.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default KomentarComponent;
