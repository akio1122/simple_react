class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {items: []}
    this.handleNewItem = this.handleNewItem.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleEditItem = this.handleEditItem.bind(this)
  }

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => {this.setState({items: response})});
  }

  handleNewItem(item) {
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: {item: {name: item.name, description: item.description}},
      success: (item) => {
        this.setState({items: this.state.items.concat(item)})
      }
    })
  }

  handleDeleteItem(id) {
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeItem(id)
      }
    })
  }

  removeItem(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id
    })
    this.setState({items: newItems})
  }

  handleEditItem(item) {
    $.ajax({
      url: `/api/v1/items/${item.id}`,
      type: 'PUT',
      data: {item: item},
      success: (response) => {
        this.updateItem(response)
      }
    })
  }

  updateItem(item) {
    var items = this.state.items.filter((i) => {
      return i.id != item.id
    })
    items.push(item)
    this.setState({items: items})
  }

  render() {
    return (
      <div>
        <NewItem handleNewItem={this.handleNewItem} />
        <AllItems items={this.state.items} handleDeleteItem={this.handleDeleteItem} handleEditItem={this.handleEditItem} />
      </div>
    )
  }
}