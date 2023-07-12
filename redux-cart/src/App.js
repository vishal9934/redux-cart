import './App.css';
import Navbar from './components/Navbar';
import ProductCard from "./components/ProductCard"
import {Routes,Route} from "react-router-dom"
import CartPage from "./components/CartPage"
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<ProductCard/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
