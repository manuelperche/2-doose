import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { AuthContext } from '../auth/AuthProvider';

const Navbar: React.FC = () => {
  const history = useHistory();
  const { authenticated } = useContext(AuthContext);

  const navigate = (link: string): void => {
    history.push(link);
  };

  const handleButton = () => {
    auth.signOut();
    history.push('/');
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="navbar-nav mr-auto">
        <h1 className="text-left cursor-pointer" onClick={() => navigate('/')}>
          2-Doose
        </h1>
      </ul>
      {authenticated ? (
        <div className="form-inline my-2 my-lg-0">
          <button className="btn btn-secondary my-2 my-sm-0" onClick={handleButton}>
            Logout
          </button>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
