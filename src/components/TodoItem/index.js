import './index.css'

const TodoItem = props => {
  const {details, deleteItem, uniqueNo} = props
  const {title} = details
  const onDelete = () => {
    deleteItem(uniqueNo)
  }

  return (
    <li className="list-item">
      <p className="todo">{title}</p>
      <button type="button" className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
