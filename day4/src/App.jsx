import React from 'react'
import { useState } from 'react'

const App = () => {
const [fullname, setfullname] = useState( )

const handler = (e)  => {
  console.log(e.target.value);
}


  return (
    <>
      <form>
        <input type="text" placeholder='name' value={fullname}  onChange={handler}/>
      </form>
    </>
  )
}

export default App