class NewItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    var name = this.refs.name.value
    var description = this.refs.description.value
    var item = {name: name, description: description}
    this.props.handleNewItem(item)
  }
  
  render() {
    return (
      <div>
        <input ref="name" type="text" placeholder="New Item" />
        <input ref="description" type="text" placeholder="New Description" />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}