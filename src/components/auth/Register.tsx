import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Register: React.FC = (props: Props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="jumbotron col-11 p-3 col-md-7 mt-5 m-md-5">
          <h2 className="text-center">Register</h2>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
              />
            </div>
          </form>
          <div className="mt-4">
            <p className="text-center">Already registered? <Link to="/login"> Log In </Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
