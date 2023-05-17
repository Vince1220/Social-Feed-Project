import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePost/CreatePostForm';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Navbar from './Components/Navbar/Navbar';
import './App.css'



function App() {

  const [posts, setPosts] = useState([{name: 'Vince Fernandez', post: 'Hello!'}])

  function addNewPost(post){ 
    let tempPosts = [...posts, post];
    setPosts(tempPosts)
  }

  return (
      <div className="container-fluid" >
        <div className="row">
        <div className="heading">
          <Navbar />
        </div>
        <h3 style={{ margin: "1rem" }}>
        Social
        <small className="text-muted">Feed</small>
        </h3>
        <div>
        <div className="col-md-6">
          <div className="border-box-create">
          <CreatePostForm addNewPost={addNewPost}/>
        </div>
        <div className='border-box'>
          <DisplayPosts parentPost={posts} />
        </div>
      </div>
      </div>
      </div>
      </div>

  );
}

export default App;