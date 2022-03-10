import './App.css';
import CustomCard from "./components/CustomCard";

function App() {
  
  const data1 = {
    title: "Cubique",
    numberOfItem: "203",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, set diam nonumy.",
    owners: "20,8k",
    floorPrice: "0,2 AVAX",
    volume: "10.2K" 
  }

  return (
    <div className="App">
      <CustomCard item={data1}/>
    </div>
  );
}

export default App;
