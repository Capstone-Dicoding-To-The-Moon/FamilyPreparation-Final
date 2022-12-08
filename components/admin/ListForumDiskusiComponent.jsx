import { Card, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { getHeaders } from '../../utils/konstanta';
import Link from 'next/link';

const ListForumDiskusiComponent = ({ dataForum, setForum }) => {
  const clickDelete = (e, id) => {
    e.preventDefault();
    console.log(id);
    setForum([]);
  };
  return (
    <Card className="my-3">
      <Card.Header className="d-flex justify-content-between">
        <h2 className="fs-4">Data Forum Diskusi</h2>
        <p>Total forum diskusi : {dataForum.length}</p>
      </Card.Header>
      <Card.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th className="text-center">Author</th>
              <th className="text-center">Created At</th>
              <th className="text-center">Komentar</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataForum.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link href={`/forumDiskusi/${data.id}`}>{data.title}</Link>
                  </td>
                  <td className="text-center">{data.author}</td>
                  <td className="text-center">{data.createdAt.split('T')[0]}</td>
                  <td className="text-center">{data.total_komentar}</td>
                  <td className="text-center">
                    <Button variant="outline-danger" onClick={(e) => clickDelete(e, data.id)}>
                      <BsFillTrashFill></BsFillTrashFill>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ListForumDiskusiComponent;
