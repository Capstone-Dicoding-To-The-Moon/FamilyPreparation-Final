const ListArtikelComponent = ({ dataArtikel, title }) => {
  return (
    <div className="shadow border p-2 rounded">
      <h5 style={{ fontWeight: 'bold' }} className="py-2 text-center">
        {title}
      </h5>
      <ol>
        {dataArtikel.map((data, idx) => {
          return (
            <li className="ps-2" key={idx}>
              <a href="/artikel" >{data}</a>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ListArtikelComponent;
