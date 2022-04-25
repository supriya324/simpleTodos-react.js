import './index.css'

const TodoItem = props => {
  const {TodoItemDetails, DeleteTodo} = props
  const {id, title} = TodoItemDetails

  const DeleteEachTodoItem = () => {
    DeleteTodo(id)
  }

  return (
    <li className="item-container">
      <p className="paragraph"> {title}</p>
      <button className="button" type="button" onClick={DeleteEachTodoItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
