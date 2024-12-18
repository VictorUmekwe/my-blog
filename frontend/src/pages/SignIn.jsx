import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleEmail = (e) => {
    setFormData({ ...formData, email: e.target.value.trim() });
  };

  const handlePassword = (e) => {
    setFormData({ ...formData, password: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // connecting to backend route for signin
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //error message
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      // navigate to sign in page if sign up is successful
      if(res.ok){
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div
      className=" container shadow-lg border-2 min-vh-100 d-flex justify-content-center align-items-center"
      // style={{ marginTop: "150px" }}
    >
      <div className=" row p-5 ">
        <div className=" col-md-6 mt-sm-4">
          <div>
            <p className="fs-1 fw-bolder">
              <span className="px-2 py-1 bg-dark bg-gradient rounded text-light">
                Vicky's
              </span>
              Blog
            </p>
            <p className=" fs-3">
              Welcome to My blog where you get the latest news in the world of tech.
              If you have an account with us, please sign in.
            </p>
          </div>
        </div>

        <div className=" col-md-6 mt-sm-4">
          <div>
            <form onSubmit={handleSubmit}>
              
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleEmail}
                />
                <label>Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handlePassword}
                />
                <label>Password</label>
              </div>

              <button
                type="submit"
                className="btn  w-100 text-center text-white btn-dark mt-2 rounded-pill fw-bold" disabled={loading}
              >
                {
                  loading ? ( <>
                     <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                    </>) : 'Sign In'
                }
              </button>
            </form>
            <div className=" mt-2 d-flex gap-2 fs-6">
              <span>Don't have an account?</span>
              <Link to="sign-up">Sign Up</Link>
            </div>

            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
