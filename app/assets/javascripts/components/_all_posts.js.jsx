class AllPosts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/posts.json').then((response) => {
      return response.json()})
    .then((data) => {this.setState({posts: data})});

  }
  render() {
    var posts = this.state.posts.map((post) => {
      return(
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      )
    })
    return(
      <div>
        <h1>To Do: List of Posts</h1>
        {posts}
      </div>
    )
  }
}