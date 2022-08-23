import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';


function App() {
  return (
    
    <div className="App">
      
      <Navbar/>
      <ItemListContainer greeting ="hola pasando datos desde app"/>
    </div>
    
  );
}

export default App;


