import './App.css';
import Navbar from './componenets/Navbar';
import ItemDetails from './containers/ItemDetails';
import ItemHistory from './componenets/ItemHistory';
import data from './data/customData.json';

function App() {
  console.log(data)
  return (
   <div className="w-screen bg-slate-100">
    <Navbar/>
    <div className="w-full flex flex-row h-full">
      <div className="flex-col w-1/5 justify-center pl-4">
        <ItemDetails image={data[0].image} title={data[0].title} subtitle={data[0].subtitle} tags={data[0].tags}/>
      </div>
      <div className="flex-col w-4/5 pl-4">
        <ItemHistory sales={data[0].sales}/>
      </div>
      
    </div>
   </div>
  );
}

export default App;
