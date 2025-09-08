import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import DeleteBTN from './DeleteBTN';
import { Warehouse } from '../types';

interface Props {
  warehouses: Warehouse[];
  onAdd: (wh: Warehouse) => void;
  onDelete: (id: number) => void;
}

const Main: React.FC<Props> = ({ warehouses, onAdd, onDelete }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState<'Hoạt động' | 'Ngừng hoạt động'>('Hoạt động');

  const handleAdd = () => {
    if (!name.trim()) {
      alert('Tên kho không được để trống');
      return;
    }
    onAdd({ id: 0, name, address, status });
    setName('');
    setAddress('');
    setStatus('Hoạt động');
  };

  return (
    <>
      <div className="bg-light p-3 rounded mb-4">
        <h6>+ Thêm kho mới</h6>
        <div className="d-flex gap-2">
          <input className="form-control" placeholder="Tên kho" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="form-control" placeholder="Địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)} />
          <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value as any)}>
            <option>Hoạt động</option>
            <option>Ngừng hoạt động</option>
          </select>
          <button className="btn btn-primary" onClick={handleAdd}>Thêm</button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Tên kho</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {warehouses.map((wh) => (
            <tr key={wh.id}>
              <td><a href="#">{wh.name}</a></td>
              <td>{wh.address}</td>
              <td>
                <span className={`badge ${wh.status === 'Hoạt động' ? 'bg-success' : 'bg-danger'}`}>
                  {wh.status}
                </span>
              </td>
              <td>
                <button className="btn btn-sm btn-info me-2">Sửa</button>
                <DeleteBTN onConfirm={() => onDelete(wh.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Main;
