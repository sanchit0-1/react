const read = (props) => {
console.log(props)
const userHandler = props.user.map((user, no) => {
    return (
      <li key={no}>
        name: {user.name}, age: {user.age}
      </li>
    );
  });
  return (
    <div>
        <hr />
        <h1>user Data</h1>
        <ol>{userHandler}</ol>
    </div>
  )
}

export default read