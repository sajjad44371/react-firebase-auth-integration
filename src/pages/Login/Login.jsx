import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <title>Login</title>
      <div className="card bg-base-100 mx-auto my-10 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* email field  */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              {/* password field  */}
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p>
                Don't have an account? Please{" "}
                <Link to="/register" className="underline text-blue-400">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
