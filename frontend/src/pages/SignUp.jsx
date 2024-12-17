import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div
      className=" container shadow-lg border-2"
      style={{ marginTop: "150px" }}
    >
      <div className=" row p-5 ">
        <div className=" col-md-6 d-flex align-items-center mt-sm-4">
          <div>
            <p className="fs-1 fw-bolder">
              <span className="px-2 py-1 bg-dark bg-gradient rounded text-light">
                Vicky's
              </span>
              Blog
            </p>
            <p className=" fs-3">
              {" "}
              Welcome to My blog where get the latest news in tech
            </p>
          </div>
        </div>

        <div className=" col-md-6 mt-sm-4">
          <div>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <label>Username</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <label>Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
                <label>Password</label>
              </div>

              <button
                type="submit"
                className="btn  w-100 text-center text-white btn-dark mt-2 rounded-pill fw-bold"
              >
                Sign In
              </button>
            </form>
            <div className=' mt-2 d-flex gap-2 fs-6'>
              <span>Have an account?</span>
               <Link to='sign-in'>
               Sign In
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
