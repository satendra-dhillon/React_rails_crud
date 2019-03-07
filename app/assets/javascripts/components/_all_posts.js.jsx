const AllPosts = (props) => {
  var posts = props.posts.map((post) => {
      return(
        <div key={post.id}>
          {/* <h1>{post.title}</h1>
          <p>{post.description}</p> */}
          <Post post={post} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
        </div>
      )
    })
    return(
      <div>
        {posts}
      </div>
    )
  }
  