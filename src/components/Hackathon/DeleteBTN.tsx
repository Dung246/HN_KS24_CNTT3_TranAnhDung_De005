import { useState } from 'react';

interface Props {
  onConfirm: () => void;
}

const DeleteBTN: React.FC<Props> = ({ onConfirm }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn btn-sm btn-outline-danger" onClick={() => setShow(true)}>Xóa</button>
      {show && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Xác nhận</h5>
                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
              </div>
              <div className="modal-body">
                Bạn có chắc chắn muốn xóa kho này không?
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShow(false)}>Hủy</button>
                <button className="btn btn-danger" onClick={() => { onConfirm(); setShow(false); }}>Xóa</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBTN;


export default DeleteBTN;
