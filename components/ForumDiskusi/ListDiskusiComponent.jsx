import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import PaginationElement from '../PagenationComponent';
import { useEffect, useState } from 'react';
import { paginate } from '../../utils/paginate';

const ListDiskusiComponent = ({ allForum, totalContent }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = totalContent;

  useEffect(() => {
    const getPosts = () => {
      setPosts(allForum);
    };
    getPosts();
  }, allForum);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePosts = paginate(allForum, currentPage, pageSize);

  return (
    <Card>
      <Card.Body>
        <Table responsive style={{ textAlign: 'left' }} className="m-0 mt-3">
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
            {paginatePosts.map((data, idx) => {
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
            <div className='d-flex mt-2'>
              <PaginationElement items={posts.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
            </div>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ListDiskusiComponent;
