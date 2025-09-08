import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteBTN() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Bạn có chắc chắn muốn xoá kho này không ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Huỷ</Button>
          <Button variant="primary">Xoá</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DeleteBTN;