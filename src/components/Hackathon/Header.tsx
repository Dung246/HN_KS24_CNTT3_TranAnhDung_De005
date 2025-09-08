import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar className="bg-green-body-tertiary  " >
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-regular fa-house"> Quản lí kho</i>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;