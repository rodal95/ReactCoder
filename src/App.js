import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './CartContext';



function App() {
  return (
    
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting ="hola pasando datos desde app"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element ={<ItemDetailContainer/>}/>
            <Route path='/cart' element ={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;


