import { useState } from "react";
const App = () => {
  const [todos, settodos] = useState([
    {
      id: 1,
      title: "kam kar le ",
      isCompleted: false,
    },
  ]);

  const [title, settitle] = useState(" ");

  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e.target[0]);
  };
  return (
    <>
      <h1>todos</h1>
      <form onSubmit={changeHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="title"
          value={title}
        />
        <br />
        <br />
        <input
          onChange={(e) => console.log(e.target.checked)}
          type="checkbox"
        />
        <br />
        <br />
        <input onChange={(e)=>console.log(e.target.value)} type="radio" value="male" /> male
        <br />
        <br />
        <input onChange={(e)=>console.log(e.target.value)} type="radio" value="female" /> female
        <br />
        <button>submit</button>
      </form>
    </>
  );
};

export default App;
