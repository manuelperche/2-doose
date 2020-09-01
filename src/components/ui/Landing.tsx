import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faUser,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="container mt-5 px-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="d-none d-md-block pb-4"> Welcome To 2-Doose! </h2>
          <h4 className="d-md-none pb-3"> Welcome To 2-Doose! </h4>
          <p className="mb-0">
            <span> A mobile-first To-Do app made with </span>{' '}
            <FontAwesomeIcon icon={faHeart} />
          </p>
        </div>
        <div className="col-12 col-md-6 mt-5">
          <Link to="/register">
            <button type="button" className="btn btn-info btn-lg btn-block">
              <FontAwesomeIcon icon={faAddressBook} /> <span> Register </span>
            </button>
          </Link>
        </div>
        <div className="col-12 col-md-6 mt-5">
          <button type="button" className="btn btn-info btn-lg btn-block">
            <FontAwesomeIcon icon={faUser} /> <span> Login </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
