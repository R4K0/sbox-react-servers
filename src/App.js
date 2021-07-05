import './App.css';
import Navbar from './Components/navbar';

function App() {
  return (
    <div>
      <h1 className="text-white font-bold text-3xl drop-shadow-2xl inline-block">s&box servers</h1>
      <text className="text-white text-sm font-normal pl-2">there are 0 players playing on 0 servers in total</text>

      <Navbar></Navbar>
    </div>
  );
}

export default App;
