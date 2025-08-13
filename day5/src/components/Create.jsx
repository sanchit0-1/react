import { useState } from "react";
const create = () => {
  const [fullname, setfullname] = useState("");
  const [Age, setAge] = useState(18); // here 18 is given to Age variable only and setAge is function like.

  const submitHandler = (e) => {
    e.preventDefault(); // this will prevent to page reload
    const newUser = { fullname, Age }; // this is the way we take data in object and using api we send this data to backend and to database.
    // API is called
  };
  return (
    <div>
      <h1>register User</h1>
      <form action="" onSubmit={submitHandler}>
        <input
          onChange={(e) => setfullname(e.target.value)}
          type="text"
          placeholder="full name"
          value={fullname}
        />

        <input
          onChange={(e) => setAge(e.target.value)}
          value={Age}
          type="text"
          placeholder="age"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default create;
