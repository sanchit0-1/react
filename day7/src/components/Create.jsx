import { useState } from "react"
import { nanoid } from "nanoid"
const Create = (props) => {
    const tods = props.tods
    const settods = props.settods
    const [title, settitle] = useState(" ")
    const sumitHandler = (e)=>{
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: title,
      iscompleted: false,
    }
    // const x = [...tods]
    // x.push(newTodo)
    // settods(x)
    // these three steps can be done in single step as follows
    settods([... tods, newTodo])
    settitle(" ") // after pressing button it will make the placeholder empty so you can make other todos without any time

  }
  return (
    <div>
        <h1>create tasks</h1>
      <form onSubmit={sumitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br /><br />
        <button>Create todo</button>
      </form>
    </div>
  )
}

export default Create