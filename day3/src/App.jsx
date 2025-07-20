import { useState } from 'react'; // to use useState we have to import it from react

// now here we will learn how to access arrays which has object in json format using map function 
let array =[
  {
    name:"sanchit",
    age:20,
    id: 1
  },
  {
    name:"anchit",
    age: 22,
    id: 2
  },
  {
    name:"anish",
    age:12,
    id:3
  }
]
let data = array.map((values, index) =>{
  return <h1 key={index}>{values.name} | {values.age}</h1> // here we had given key values which should be unique so that react can understand it well and able to make changes. otherwise it will through an array.
})

// From here we will learn how to use useState because if make changes by making ourseleves variable and making a function to click it will change the name , but it will not to make that change we have to learn useState (react hooks )

const App = () => {
  const [username, setusername] = useState("sanchit"); // remmber username is read only it cannot be changed in place of that we use setusername function to make changes by passing argument in it.

  const handler = () =>{
    setusername("anchit") // here how we have used stusername function and it is async code.

  }
  return (
  <>
    {/* we are rendering data  */}
    <div>
      <ol>
        {data} /** here map func returns array now returned array is now in simpler form so it can render easily */
      </ol>  
    </div>  

{/* using useState */}
<h1>userName change onclick</h1>
<h2>
  {username}
</h2>
<button onClick={handler}>
  change
</button>

  
  </>
  )
}

export default App

//