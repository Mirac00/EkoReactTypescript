import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostComponent from '../common/PostComponent';
import AddPostComponent from '../common/AddPostComponent';

function Home() {
  const [updatePosts, setUpdatePosts] = useState(false);

  const handlePostAdded = () => {
    setUpdatePosts(!updatePosts);
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="gird">
          <div className="row">
            <div className="col">
              <AddPostComponent onPostAdded={handlePostAdded} />
              <PostComponent key={updatePosts ? 'updatePostsKey' : null} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
