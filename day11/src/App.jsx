import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="bg-black text-amber-50 h-screen w-screen ">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
