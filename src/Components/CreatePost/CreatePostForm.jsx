import React, { useState } from 'react';
import './CreatePost.css';

const CreatePostForm = (props) => {
    const [name, setName] = useState('');     
    const [post, setPost] = useState('');   

    function handleSubmit(formEvent){
        formEvent.preventDefault();  
        let newPost = {      
            name: name,
            post: post
        };
        console.log(newPost);     
        props.addNewPost(newPost) 
        setName('') 
        setPost ('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='border-box'>
                <div className='form-group row'>
                    <label htmlFor='input name' className='col-sm-1 col-form-label'> Name</label>
                    <div className='col-sm-10'>                
                        <input type='text' onChange={(event) => setName(event.target.value)} value={name}/>    
                    </div>
                </div>
                <div className='form-group row'>
                    <label htmlFor='input post' className='col-sm-1 col-form-label'>Post</label>
                <div className='col-sm-10'>
                    <input type='text' onChange={(event) => setPost(event.target.value)} value={post}/>    
                </div>
                    </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Make Post</button>
                    </div>
                </div>
            </div>
        </form>

     );
}
 
export default CreatePostForm;