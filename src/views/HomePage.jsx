import { Container } from "react-bootstrap";
import Emoji from "react-emojis";

const HomePage = () => {
  return (
    <>
    <Container className=" d-flex flex-column gap-2 py-5">
         <h1>
        Bienvenido a <b>Happy Cake</b>
      </h1>
      <p className=" fs-4">El lugar de los pasteles felices</p>
      <Emoji emoji="birthday-cake" size="100"/>
    </Container>
     
    </>
  );
};

export default HomePage;
