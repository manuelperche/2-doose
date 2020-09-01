import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  
}

const Login: React.FC = (props: Props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="jumbotron col-11 p-3 col-md-7 mt-5 m-md-5">
          <h2 className="text-center">Login</h2>
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
          </form>
          <div className="mt-4">
            <p className="text-center">Want to create an account? <Link to="/register"> Register </Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
