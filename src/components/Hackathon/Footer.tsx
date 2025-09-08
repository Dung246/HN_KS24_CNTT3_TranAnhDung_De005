import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <nav>
        <ul className="pagination mb-0">
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
        </ul>
      </nav>
      <div>
        <select className="form-select" style={{ width: '150px' }}>
          <option>1 bản ghi / trang</option>
          <option>5 bản ghi / trang</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;

