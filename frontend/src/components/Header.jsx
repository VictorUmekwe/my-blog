import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";
import { Button, Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar expand="lg" className=" border-bottom py-md-3 rounded shadow rounded">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="fs-3 fw-bold ">
          <span className="px-2 py-1 bg-dark bg-gradient rounded-pill-end text-light">
            Vicky's
          </span>{" "}
          Blog
        </Navbar.Brand>
        <Form>
          <Form.Control
            type="text"
            placeholder="Search..."
            className="rounded search d-none d-lg-inline"
          />
        </Form>
        <Button variant="dark" className=" d-lg-none rounded-pill d-sm-inline">
          <AiOutlineSearch />
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto  text-center py-2">
            <Nav.Link as={Link} to={"/"} active={path === "/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"} active={path === "/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"/projects"} active={path === "/projects"}>
              Projects
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center justify-content-between"> 
            <div className="form-check form-switch ">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
              />
            </div>
            <div>
              <Link to="/sign-in">
                <Button variant="outline-dark" className="rounded-pill btn-lg" type="submit">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
