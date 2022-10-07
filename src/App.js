import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './CartContext';
import CheckOut from './components/CheckOut';
import Carrousel from './components/Carrousel'
import Footer from './components/Footer';


function App() {
  return (
    
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element ={<ItemDetailContainer/>}/>
            <Route path='/cart' element ={<Cart/>}></Route>
            <Route path ='/checkout' element={<CheckOut/>}></Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
      
      <Footer/>
    </div>
    
  );
}

export default App;


