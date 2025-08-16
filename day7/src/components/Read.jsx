
const Read = (props) => {
    const tods = props.tods
    const renderUser = tods.map((todo) =>{
    return <li key={todo.id}>{todo.title}</li>
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