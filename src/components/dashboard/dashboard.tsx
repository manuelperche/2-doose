import React from 'react';
import FormModal from './FormModal';
import Popup from 'reactjs-popup';

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <Popup modal trigger={ <button className="col-10 col-md-4 mt-3 btn btn-warning btn-lg btn-block">New To-Do</button> } >
          { (close: any) => <FormModal {...props} close={close} /> }
        </Popup>

        <div className="jumbotron m-2 mt-3 col-11 text-center">
          <h1 className="d-none d-md-block">Your 2-Doose go here!</h1>
          <h4 className="d-md-none">Your 2-Doose go here!</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
