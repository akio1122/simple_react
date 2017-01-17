class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state={editable: false}
    this.onClickEdit = this.onClickEdit.bind(this)
  }

  onClickEdit() {
    if(this.state.editable) {
      var name = this.refs.name.value
      var description = this.refs.description.value
      var item = {id: this.props.item.id, name: name, description: description}
      this.props.handleEditItem(item)
    }
    this.setState({editable: !this.state.editable})
  }

  render() {
    var name = this.state.editable ? <input ref="name" type="text" defaultValue={this.props.item.name}/> : <p>{this.props.item.name}</p>
    var description = this.state.editable ? <input ref="description" type="text" defaultValue={this.props.item.description}/> : <p>{this.props.item.description}</p>
    return (
      <div>
        {name}
        {description}
        <button onClick={this.props.handleDeleteItem.bind(this, this.props.item.id)}>Delete</button>
        <button onClick={this.onClickEdit}>{this.state.editable ? "Submit" : "Edit"}</button>
      </div>
    )
  }
}