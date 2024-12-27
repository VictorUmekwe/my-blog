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
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const handleEmail = (e) => {
    setFormData({ ...formData, email: e.target.value.trim() });
  };

  const handlePassword = (e) => {
    setFormData({ ...formData, password: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
        toast("Sign in Successfull", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
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
              disabled={loading}
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
