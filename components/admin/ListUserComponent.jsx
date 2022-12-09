import { Card, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { getHeaders } from '../../utils/konstanta';
import Link from 'next/link';

const ListUserComponent = ({ dataUser, setUser }) => {
  const clickDelete = (e, id) => {
    e.preventDefault();
    setUser([]);
  };
  return (
    <Card>
      <Card.Header className="d-flex justify-content-between">
        <h2 className="fs-4">Data User</h2>
        <p>Total user : {dataUser.length}</p>
      </Card.Header>
      <Card.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th className="text-center">Email</th>
              <th className="text-center">Created At</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataUser.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{data.name}</td>
                  <td className="text-center">{data.email}</td>
                  <td className="text-center">{data.createdAt.split('T')[0]}</td>
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

export default ListUserComponent;
