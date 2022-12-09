import { Card, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { getHeaders } from '../../utils/konstanta';
import Link from 'next/link';
import { deleteData } from '../../utils/fetchApi';
import Swal from 'sweetalert2';
import axios from 'axios';

const ListArtikelComponent = ({ dataArtikel, setArtikel }) => {
  const clickDelete = async (e, id) => {
    e.preventDefault();
    const headers = getHeaders();
    Swal.fire({
      title: 'Apakah anda yakin untuk menghapus forum ini?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Ya',
      denyButtonText: `Tidak`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Data berhasil dihapus', '', 'success');
        const result = await deleteData('posts', id);
        const updateData = await axios.get('https://familypreparation.up.railway.app/posts').then((res) => res.data.data);
        setArtikel(updateData);
      }
    });

    
  };
  return (
    <Card>
      <Card.Header className="d-flex justify-content-between">
        <h2 className="fs-4">Data Artikel</h2>
        <p>Total artikel : {dataArtikel.length}</p>
      </Card.Header>
      <Card.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th className="text-center">Author</th>
              <th className="text-center">Created At</th>
              <th className="text-center">Likes</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataArtikel.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link href={`/artikel/${data.id}`}>{data.title}</Link>
                  </td>
                  <td className="text-center">{data.user.name}</td>
                  <td className="text-center">{data.createdAt.split('T')[0]}</td>
                  <td className="text-center">{data.vote}</td>
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

export default ListArtikelComponent;
