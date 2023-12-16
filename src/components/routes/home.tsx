import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostComponent from '../common/PostComponent';



function Home() {
  return (
    <React.Fragment>
    <div className="container mt-3">
      <div className="gird">
        <div className="row">
          <div className="col">
            <PostComponent/>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Home;
