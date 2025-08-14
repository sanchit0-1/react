import { useState } from "react";
const App = () => {
  const [todos, settodos] = useState(" ");
  return (
    <>
      <h1>todos</h1>
      <form>
        <input
          onChange={(e) => settodos(e.target.value)}
          value={todos}
          type="text"
          placeholder="to do "
        />
        work
        <br />
        <br />
        <input type="checkbox"  />
        <button>submit</button>
      </form>
    </>
  );
};

export default App;
