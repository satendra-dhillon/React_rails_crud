const NewPost = (props) => {

  let formFields = {}

  return(
    <form onSubmit={(e) => { 
      props.handleFormSubmit(formFields.title.value, formFields.description.value);
      // e.target.reset();
    }}>
      <input ref = {input => formFields.title = input} placeholder = "Enter title"></input>
      <input ref = { input => formFields.description = input} placeholder = 'Enter description' ></input>
      <button>submit</button>
    </form>
  )

}