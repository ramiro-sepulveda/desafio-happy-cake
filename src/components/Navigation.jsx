import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Emoji from "react-emojis";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container className="justify-content-start gap-2">
        <Link to="/desafio-happy-cake/" className="text-white ms-3 text-decoration-none">
          <Emoji emoji="house" /> Home
        </Link>
        <Link to="/desafio-happy-cake/contacto" className="text-white ms-3 text-decoration-none">
          <Emoji emoji="orange-book" /> Contacto
        </Link>
      </Container>
      <Container className=" justify-content-end">
        <Navbar.Brand>
          <Link to="/desafio-happy-cake/" className="text-white ms-3 text-decoration-none">
            Happy Cake <Emoji emoji="shortcake" />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
