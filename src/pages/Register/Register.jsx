import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use, useState } from "react";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Register = () => {
  const [terms, setTerms] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [error, setError] = useState("");

  const { createUser } = use(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // const handleRegister = (event) => {
  //   event.preventDefault();

  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   const name = event.target.name.value;
  //   console.log(email, password, name);

  //   // reset status
  //   setRegSuccess(false);
  //   setError("");

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       setRegSuccess(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error.message);
  //     });
  // };

  return (
    <>
      <title>Register</title>
      <div className="card bg-base-100 mx-auto my-10 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center">Register now!</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name field  */}
              <label className="label">Name</label>
              <input
                type="text"
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
              <div>
                <label className="label mt-5">
                  <input
                    type="checkbox"
                    name="terms"
                    className="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                  />
                  Remember me
                </label>
              </div>
              <button disabled={!terms} className="btn btn-neutral mt-4">
                Register
              </button>
              {regSuccess && (
                <p className="text-green-400">Account created successfully</p>
              )}
              {error && <p className="text-red-400">{error}</p>}
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
