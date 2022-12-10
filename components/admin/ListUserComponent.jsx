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
import { paginate } from '../../utils/paginate';
import PaginationElement from '../PagenationComponent';

const ListUserComponent = ({ dataUser, setUser }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePosts = paginate(dataUser, currentPage, pageSize);

  const clickDelete = async (e, email) => {
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
        const result = await deleteData('user', email);
        const updateData = await axios.get('https://familypreparation.up.railway.app/user', headers).then((res) => res.data.data);
        console.log(updateData);
        setUser(updateData);
      }
    });
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
            {paginatePosts.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{data.name}</td>
                  <td className="text-center">{data.email}</td>
                  <td className="text-center">{data.createdAt.split('T')[0]}</td>
                  <td className="text-center">
                    <Button variant="outline-danger" onClick={(e) => clickDelete(e, data.email)}>
                      <BsFillTrashFill></BsFillTrashFill>
                    </Button>
                  </td>
                </tr>
              );
            })}
            <div className="d-flex">
              <PaginationElement items={dataUser.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
            </div>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ListUserComponent;
