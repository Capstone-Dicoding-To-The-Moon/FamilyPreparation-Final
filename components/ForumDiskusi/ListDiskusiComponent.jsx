import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const ListDiskusiComponent = ({ allForum }) => {
  console.log(allForum);
  return (
    <Card className="mb-3">
      <Card.Body>
        <Table responsive="sm" style={{ textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ width: 600 }}>Topics</th>
              <th className="text-center">Category</th>
              <th className="text-center">Comment</th>
              <th className="text-center">Author</th>
              <th style={{ width: 200 }} className="text-center">
                Created at
              </th>
            </tr>
          </thead>
          <tbody>
            {allForum.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    <Link className="nav-link" href={`/forumDiskusi/${data.id}`}>
                      {data.title}
                    </Link>
                  </td>
                  <td className="text-center">{data.kategori_forum[0].kategori.title}</td>
                  <td className="text-center">{data.total_komentar}</td>
                  <td className="text-center">{data.user.name}</td>
                  <td className="text-center">{data.createdAt.split('T')[0]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ListDiskusiComponent;
