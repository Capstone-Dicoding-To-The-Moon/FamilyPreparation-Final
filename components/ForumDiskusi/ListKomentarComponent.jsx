import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { BsChatLeftText, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import { getHeaders } from '../../utils/konstanta';

const ListKomentarComponent = ({ dataKomentar, setKomentar }) => {
  const upVote = async (e, forumId, userId) => {
    e.preventDefault();
    const headers = getHeaders();
    const data = { id: userId.toString() };
    await axios
      .put('http://localhost:5000/forumUpVote', data, headers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        alert('error', 'Ooopss!!', `${err.response.status} ${err.response.statusText}`);
      });
    const upVote = `upVote${userId}`;
    const downVote = `downVote${userId}`;

    const changeUpVote = document.getElementById(upVote);
    const changeDownVote = document.getElementById(downVote);
    changeUpVote.classList.add('disabled', 'btn-secondary');
    changeUpVote.classList.remove('btn-outline-secondary');
    changeDownVote.classList.add('btn-outline-secondary');
    changeDownVote.classList.remove('disabled', 'btn-secondary');

    let komentarUpdate = await axios.get(`http://localhost:5000/forumDis/${forumId}`).then((res) => res.data.data.komentar);
    console.log(komentarUpdate);
    setKomentar(komentarUpdate);
  };

  return (
    <>
      {dataKomentar.map((data, idx) => {
        return (
          <div key={idx}>
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
                      <ButtonGroup aria-label="Basic example">
                        <Button variant="outline-secondary" id={`upVote${data.id}`} onClick={(e) => upVote(e, data.forumId, data.id)}>
                          <BsChevronUp></BsChevronUp>
                        </Button>
                        <button className="btn btn-outline-secondary" disabled>
                          {data.vote}
                        </button>
                        <Button variant="outline-secondary" id={`downVote${data.id}`} onClick={(e) => downVote(e, data.forumId, data.id)}>
                          <BsChevronDown></BsChevronDown>
                        </Button>
                      </ButtonGroup>
                    </Card.Subtitle>
                  </Card.Body>
                </Col>
              </Row>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ListKomentarComponent;
