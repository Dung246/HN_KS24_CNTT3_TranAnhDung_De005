import React from 'react'
import { Warehouse } from './types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Hackathon/Header';
import Main from './components/Hackathon/Main';
import Footer from './components/Hackathon/Footer';
import DeleteBTN from './components/Hackathon/DeleteBTN';
const App = () => {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([
    {
      id: 1,
      name: 'Kho Hà Nội',
      address: '123 Đường Láng, Đống Đa, Hà Nội',
      status: 'Hoạt động',
    },
    {
      id: 2,
      name: 'Kho TP.Hồ Chí Minh',
      address: '456 Lê Lợi, Quận 1, TP.HCM',
      status: 'Hoạt động',
    },
    {
      id: 3,
      name: 'Kho Đà Nẵng',
      address: '789 Nguyễn Văn Linh, Hải Châu, Đà Nẵng',
      status: 'Ngừng hoạt động',
    },
  ]);

  const addWarehouse = (newWh: Warehouse) => {
    setWarehouses([...warehouses, { ...newWh, id: Date.now() }]);
  };

  const deleteWarehouse = (id: number) => {
    setWarehouses(warehouses.filter((wh) => wh.id !== id));
  };

  return (
    <div className="container mt-4">
      <Header />
      <Main
        warehouses={warehouses}
        onAdd={addWarehouse}
        onDelete={deleteWarehouse}
      />
      <Footer />
    </div>
  );
};

export default App;
