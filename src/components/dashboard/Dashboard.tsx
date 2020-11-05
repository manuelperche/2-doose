import React from 'react';
import FormModal from './FormModal';
import Popup from 'reactjs-popup';
import Todos from './Todos';

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <Popup modal trigger={ <button className="col-10 col-md-4 mt-3 btn btn-warning btn-lg btn-block">New To-Do</button> } >
          { (close: any) => <FormModal {...props} close={close} /> }
        </Popup>
        <Todos />
      </div>
    </div>
  );
};

export default Dashboard;
