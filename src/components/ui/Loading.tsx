import React from 'react';
import Loader from 'react-loader-spinner';

interface Props {}

const Loading = (props: Props) => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="mt-5 pt-5">
            <Loader type="Oval" color="#00BFFF"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
