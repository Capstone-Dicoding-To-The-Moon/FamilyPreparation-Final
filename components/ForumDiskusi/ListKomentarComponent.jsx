import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { BsChatLeftText, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import { getHeaders } from '../../utils/konstanta';
import alert from '../../utils/alert';

const ListKomentarComponent = ({ dataKomentar, setKomentar }) => {
  const upVote = async (e, forumId, userId) => {
    e.preventDefault();
    const headers = getHeaders();
    const data = { id: userId.toString() };
    await axios
      .put('https://familypreparation.up.railway.app/komentar_forum_up_vote', data, headers)
      .then((res) => {
        alert('success', 'success', 'anda berhasil melakukan upVote');
      })
      .catch((err) => {
        alert('error', 'Ooopss!!', `Silahkan login terlebih dahulu`);
      });
    const upVote = `upVote${userId}`;
    const downVote = `downVote${userId}`;

    const changeUpVote = document.getElementById(upVote);
    const changeDownVote = document.getElementById(downVote);
    changeUpVote.classList.add('disabled', 'btn-secondary');
    changeUpVote.classList.remove('btn-outline-secondary');
    changeDownVote.classList.add('btn-outline-secondary');
    changeDownVote.classList.remove('disabled', 'btn-secondary');

    let komentarUpdate = await axios.get(`https://familypreparation.up.railway.app/forumDis/${forumId}`).then((res) => res.data.data.komentar);
    setKomentar(komentarUpdate);
  };

  const downVote = async (e, forumId, userId) => {
    e.preventDefault();
    const headers = getHeaders();
    const data = { id: userId.toString() };
    await axios
      .put('https://familypreparation.up.railway.app/komentar_forum_down_vote', data, headers)
      .then((res) => {
        alert('success', 'success', 'anda berhasil melakukan downVote');
      })
      .catch((err) => {
        alert('error', 'Ooopss!!', `Silahkan login terlebih dahulu`);
      });
    const upVote = `upVote${userId}`;
    const downVote = `downVote${userId}`;

    const changeUpVote = document.getElementById(upVote);
    const changeDownVote = document.getElementById(downVote);
    changeDownVote.classList.add('disabled', 'btn-secondary');
    changeDownVote.classList.remove('btn-outline-secondary');
    changeUpVote.classList.add('btn-outline-secondary');
    changeUpVote.classList.remove('disabled', 'btn-secondary');

    let komentarUpdate = await axios.get(`https://familypreparation.up.railway.app/forumDis/${forumId}`).then((res) => res.data.data.komentar);
    setKomentar(komentarUpdate);
  };

  return (
    <>
      {dataKomentar.map((data, idx) => {
        return (
          <div key={idx}>
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
          </div>
        );
      })}
    </>
  );
};

export default ListKomentarComponent;
