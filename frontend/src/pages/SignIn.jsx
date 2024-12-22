import React from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import "../css/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);


  const handleEmail = (e) => {
    setFormData({ ...formData, email: e.target.value.trim() });
  };

  const handlePassword = (e) => {
    setFormData({ ...formData, password: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return setErrorMessage("All fields required");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = res.json();

      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);

      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
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
          <Form onSubmit={handleSubmit}>
         

            <FloatingLabel label="Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="email"
                className="input-color"
                value={formData.email}
                onChange={handleEmail}
              />
            </FloatingLabel>

            <FloatingLabel label="Password" className="mb-3">
              <Form.Control
                type="password"
                placeholder="password"
                className="input-color"
                value={formData.password}
                onChange={handlePassword}
              />
            </FloatingLabel>
            <Button
              variant="outline-dark"
              className=" w-100 rounded-pill mb-3 fw-bold"
              type="submit"
              active={loading}
            >
              {loading ? (
                <>
                  <span role="status">Loading...</span>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    aria-hidden="true"
                  ></span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </Form>
          <div className=" fs-6 mb-2">
            <span className=" me-2">Don't have an accout?</span>
            <Link to="sign-up">Sign Up</Link>
          </div>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
