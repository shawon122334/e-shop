import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Routes, Navigate,Route, Link } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inverntory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProdcutDetails/ProductDetails';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path="/shop" element={<Shop></Shop>} />
        {/* <Route path="/" element={<Navigate to="/shop" />}/> */}
        <Route path="/" element={<Shop></Shop>}/>
        <Route path="/review" element={<OrderReview></OrderReview>}/>
        <Route path="/manage" element={<Inventory></Inventory>}/>
        <Route path="/product/:productKey" element={ <ProductDetails></ProductDetails> } />
        <Route path="*" element={<NotFound></NotFound>}/>
      </Routes>
      
    </div>
  );
}

export default App;
