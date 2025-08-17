import { createContext } from "react";
import { useState } from "react";
export const todocontext = createContext(null)
const Wrapper = (prop) => {
  const [tods, settods] = useState([
    { id: 1, title: "kaam kar lo sir", iscompleted: false },
  ]);
  
  return (
    <todocontext.Provider value={[tods, settods]}>
      {prop.children}
    </todocontext.Provider>
  )
}

export default Wrapper;