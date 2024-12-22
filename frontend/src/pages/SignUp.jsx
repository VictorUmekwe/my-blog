import React from "react";
import { Col, Container, FloatingLabel, Row, Form, Button } from "react-bootstrap";
import "../css/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container className="my-5 min-vh-100 shadow border-2 d-flex justify-content-center align-items-center margin ">
      <Row className="pt-sm-0 mt-sm-0 p-md-3">
        <Col md={6}>
          <div>
            <p className="fs-1 fw-bolder">
              <span className="px-2 py-1 bg-dark bg-gradient rounded text-light">
                Vicky's
              </span>
              Blog
            </p>
            <p className=" fs-3">
              Welcome to My blog where you get the latest news in the world of
              tech. Be sure to sign up for more updates.
            </p>
          </div>
        </Col>

        <Col md={6}>
          <Form>
            <FloatingLabel label="Username" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Username"
                className="input-color"
              />
            </FloatingLabel>

            <FloatingLabel label="Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="email"
                className="input-color"
              />
            </FloatingLabel>

            <FloatingLabel label="Password" className="mb-3">
              <Form.Control
                type="password"
                placeholder="password"
                className="input-color"
              />
            </FloatingLabel>
            <Button variant="outline-dark" className=" w-100 rounded-pill mb-3 fw-bold" >
              Sign Up
            </Button>
            <div className=" fs-6">
              <span className=" me-2">Already have an accout?</span>
              <Link to='sign-in'>Sign In</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
