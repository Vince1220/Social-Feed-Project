import React, { useState } from 'react';

const Post = (props) =>{
    const [typeOfLike, setTypeOfLike]= useState('up');
    function handleLike(event) {
        if (typeOfLike === 'down') {
            setTypeOfLike('up')
        }
        else{
             setTypeOfLike('down')
        }

    }

    return ( 
        <tr>
            <td>{props.parentPost.name}</td>
            <td>{props.parentPost.post}</td>   
            <td><button type='react' className={`fa fa-thumbs-${typeOfLike}`} onClick={handleLike}></button></td>
        </tr>
         );
    }
     
    export default Post;