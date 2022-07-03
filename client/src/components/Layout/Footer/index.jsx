import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light border-top">
      <Container className="h-100 d-flex align-items-center">
        <p className="text-muted fw-bold">Shopping Cart &copy; 2022</p>
      </Container>
    </footer>
  );
}

export default Footer;
