import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostComponent from '../common/PostComponent';
import AddPostComponent from '../common/AddPostComponent';



function Home() {
  return (
    <React.Fragment>
    <div className="container mt-3">
      <div className="gird">
        <div className="row">
          <div className="col">
            <AddPostComponent/>
            <PostComponent/>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Home;
