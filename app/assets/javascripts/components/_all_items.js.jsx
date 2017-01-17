class AllItems extends React.Component {

  render() {
    var items = this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item} handleDeleteItem={this.props.handleDeleteItem} handleEditItem={this.props.handleEditItem} />
        </div>
      )
    })

    return (
      <div>
        {items}
      </div>
    )
  }
}