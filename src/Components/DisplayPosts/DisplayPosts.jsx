import Post from "../Post/Post";

const DisplayPosts = (props) => {
    return ( 
        <div>
        <h3>Feed</h3>
            <table>
                <tbody>
                {props.parentPost.map((post, index) => {
                    return (
                        <Post parentPost={post} key={index} />
                    )
                })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayPosts;