class Post extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    console.log("post");
    console.log(this.props.post)
    
    if(this.state.editable) {
      console.log(this.title.value);
      let title = this.title.value
      let description = this.description.value
      let id = this.props.post.id
      console.log(id);
      let post = {id: id, title: title, description: description}
      this.props.handleUpdate(post)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    let title = this.state.editable ? <input type='text' ref={input => this.title = input} defaultValue={this.props.post.title} />: <h3>{this.props.post.title}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.post.description} /> : 
          <h3> {this.props.post.description} </h3> 
    
    return(
      <div>
        {title}
        {description}
        <button onClick = {() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick = {() => this.props.handleDelete(this.props.post.id)}> Delete </button>
      </div>
    )
  }
}