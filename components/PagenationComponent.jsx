// import Pagination from 'react-bootstrap/Pagination';
import _ from 'lodash';

const PaginationElement = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a onClick={() => onPageChange(page)} className="page-link fs-6">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationElement;
