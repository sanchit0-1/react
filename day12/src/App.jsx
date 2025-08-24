import axios from "axios";
const App = () => {
  // here we will call axios which and use it to fetch data from a backend using fake api
  const backendData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
    } catch (error) {console.log(error)}
  };

  return (
    <div>
      <button onClick={backendData}>dataFetch</button>
    </div>
  );
};

export default App;
