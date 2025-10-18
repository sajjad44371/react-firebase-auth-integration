import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <>
      <title>Register</title>
      <div className="card bg-base-100 mx-auto my-10 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center">Register now!</h1>
          <form>
            <fieldset className="fieldset">
              {/* name field  */}
              <label className="label">Name</label>
              <input
                type="email"
                name="name"
                className="input"
                placeholder="Enter your name"
              />
              {/* email field  */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* password field  */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4">Login</button>
              <p>
                Already have an account? Please{" "}
                <Link to="/login" className="underline text-blue-400">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
