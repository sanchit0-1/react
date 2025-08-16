//todo list making:
import { useState } from "react";
const App = () => {
  const [tods, settods] = useState([
    { id: 1, title: "kaam kar lo sir", iscompleted: false },
  ]);
  const [title, settitle] = useState(" ");
  const [completed, setcompleted] = useState(false);
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("mumbai")

  return (
    <div>
      <h1>create tasks</h1>
      <form action="">
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <input
          checked = {completed}
          onChange={(e) => setcompleted(e.target.checked)}
          type="checkbox"
        />{" "}
        Completed
        <br />
        <br />
        <input
          checked = {gender == "male" && true}
          onChange={(e) => setgender(e.target.value)}
          type="radio"
          value="male"
        />{" "}
        Male
        <input
          checked = {gender == "female" && true}
          onChange={(e) => setgender(e.target.value)}
          type="radio"
          value="female"
        />{" "}
        Female
        <br /> <br />
        <select onChange={(e)=>setcity(e.target.value)} value={city} >
          <option value="mumbai">mumbai</option>
          <option value="jaipur">jaipur</option>
          <option value="delhi">delhi</option>
        </select> Select
        <br /> <br />
        <button>Create todo</button>
      </form>
    </div>
  );
};

export default App;
