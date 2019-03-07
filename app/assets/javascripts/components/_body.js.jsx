class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewPost = this.addNewPost.bind(this)
  }

  handleFormSubmit(title, description){
    console.log(title, description);
    let body = JSON.stringify({post: {title: title, description: description }})
    console.log("handleFormSubmit");
    console.log(body);
    
    fetch('http://localhost:3000/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {
      console.log("test posts");
      return response.json()
    }).then((post) => {
      this.addNewPost(post)
    })
  }

  addNewPost(post){
    this.setState({
      posts: this.state.posts.concat(post)
    })
  }

  componentDidMount(){
    fetch('/api/v1/posts.json').then((response) => {
      return response.json()})
    .then((data) => {this.setState({posts: data})});

  }

  render(){
    return(
      <div>
        <NewPost handleFormSubmit={this.handleFormSubmit} />
        <AllPosts posts={this.state.posts} />
      </div>
    )
  }
}