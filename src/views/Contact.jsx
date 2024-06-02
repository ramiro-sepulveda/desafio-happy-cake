import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container className=" w-75 mt-3">
        <h1>Cuentanos, ¿en qué te podemos ayudar?</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea"/>
          </Form.Group>
        </Form>
        <Button variant="danger" type="submit" >Enviar</Button>
      </Container>
    </>
  );
};

export default Contact;
