import './App.css';
import Navbar from './componenets/Navbar';
import ItemDetails from './containers/ItemDetails';
import ItemHistory from './componenets/ItemHistory';
import data from './data/customData.json';

function App() {
  return (
   <div className="w-screen h-screen bg-slate-100">
    <Navbar/>
    <div className="w-full flex flex-row h-full">
      <div className="flex-col w-1/5 justify-center pl-4">
        <ItemDetails item={data[0]} />
      </div>
      <div className="flex-col w-4/5 pl-4">
        <ItemHistory/>
      </div>
      
    </div>
   </div>
  );
}

export default App;
