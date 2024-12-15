import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import '../css/Header.css'
const Header = () => {
  return (
    <Navbar expand="lg" className=" border-bottom">
      <Container>
        <Navbar.Brand href="#home" className="fs-5 fw-bold">
          <span className=" px-2 py-1 bg-dark bg-gradient rounded text-light">
            Vicky's
          </span>
          Blog
        </Navbar.Brand>
        <Form>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search..."
              className="rounded d-none d-lg-inline"
            />
            {/* <Button variant="dark"><AiOutlineSearch/></Button> */}
          </InputGroup>
        </Form>
        <Button variant="dark" className=" d-lg-none rounded-pill d-sm-inline">
          <AiOutlineSearch />
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=" order-2" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center py-2 ">
            <Nav.Link href="/" className="nav-links">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-links">About</Nav.Link>
            <Nav.Link href="/projects" className="nav-links">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className="btn btn-outline-dark rounded-pill me-3">
          <FaMoon height={10} width={12} />
        </button>
        <Link to='/sign-in'>
          <button className="btn btn-outline-dark">Sign In</button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
