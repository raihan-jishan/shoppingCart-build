import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom'; // import working stafs from R-router-dom
import Navbar from './components/Navbar'; // import Navbar
import {Shop} from "./pages/shop/Shop";
import { Cart } from './pages/cart/Cart'; 
function App() {
   return(
    <div> 
 
      <BrowserRouter>
      <Navbar /> 
      <Routes>
      <Route path='/' element={<Shop />}/>
      <Route path='/cart' element={<Cart/> }/>  
      </Routes>
      </BrowserRouter>
       
    </div>
   )
}

export default App;
