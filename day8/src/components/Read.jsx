
const Read = (props) => {
  const settods = props.settods
  const deleteHandler = (id) =>{
    // console.log(id)
    const filteredtodo = tods.filter((tods) => tods.id != id)
    // console.log(filteredtodo)
    settods(filteredtodo)
  }
  const tods = props.tods
    const renderUser = tods.map((todo) =>{
    return <li key={todo.id}>{todo.title}|<span onClick={() => deleteHandler(todo.id)}>Delete</span></li>
  })
  
  return (
    <div>
        <h1>list</h1>
      <ol>
        {renderUser}
      </ol>
    </div>
  )
}

export default Read