class Post extends React.Component{
  render(){
    return(
      <div>
        <h1>
          {this.props.post.title}
        </h1>
        <p>
          {this.props.post.description}
        </p>
        <button onClick = {() => this.props.handleDelete(this.props.post.id)}> Delete </button>
      </div>
    )
  }
}