import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
let active = 1;
let items = [];
for (let number = 1; number <= 100; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
export default function Footer() {
  return (
    <div>
      
    </div>
  )
}
