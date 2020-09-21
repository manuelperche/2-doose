import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar: React.FC = () => {
  const history = useHistory();

  const navigate = (link: string): void => {
    history.push(link);
  };
  
  return (
    <nav className="nav navbar navbar-expand-lg navbar-dark bg-primary">
      <h1 className="text-left cursor-pointer" onClick={() => navigate('/')}>2-Doose</h1>
    </nav>
  )
}

export default Navbar
