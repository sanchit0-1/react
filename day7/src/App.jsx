//todo list making:
import { useState } from "react";
import {nanoid} from "nanoid"
const App = () => {
  const [tods, settods] = useState([
    { id: 1, title: "kaam kar lo sir", iscompleted: false },
  ]);
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
  console.log(tods)
  const renderUser = tods.map((todo) =>{
    return <li key={todo.id}>{todo.title}</li>
  })

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
      <hr />
      <h1>list</h1>
      <ol>
        {renderUser}
      </ol>
    </div>
  );
};

export default App;
