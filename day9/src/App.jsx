//todo list making:
import { useState } from "react"
import Create from "./components/Create";
import Read from "./components/Read";
const App = () => {
  const [tods, settods] = useState([
    { id: 1, title: "kaam kar lo sir", iscompleted: false },
  ]);
  return (
    <div>
      <Create settods = {settods} tods = {tods} />
      <hr />
      <Read tods = {tods} settods = {settods} />
    </div>
  );
};

export default App;
