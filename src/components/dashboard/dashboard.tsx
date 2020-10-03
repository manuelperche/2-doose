import React from 'react';

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <button className="col-10 col-md-4 mt-3 btn btn-warning btn-lg btn-block">New To-Do</button>
      </div>
    </div>
  );
};

export default Dashboard;
