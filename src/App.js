import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting ="hola pasando datos desde app"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element ={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;


