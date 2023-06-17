import React,{useState} from "react";
//import './App.css';
import Data from "./Data";
import Header from "./Header";
import {BrowserRouter as Router} from "react-router-dom";
import Directions from "./Directions";
const App = () => {
  const {productItems}=Data;
  const [cartItems,setCartItems] = useState([]);
  //console.log({productItems}.productItems);
  const handleAddProduct=(product)=>{
  const ProductExist=cartItems.find((item)=>item.id===product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=>item.id===product.id ?{...ProductExist,quantity:ProductExist.quantity+1}:item));
    }
    else{
      setCartItems([...cartItems,{...product,quantity:1}]);
    }
  };
  const handleRemoveProduct=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id===product.id);
    if(ProductExist.quantity===1){
      setCartItems(cartItems.filter((item)=>item.id!==product.id))
    }
    else{
      setCartItems(
        cartItems.map((item)=>item.id===product.id?{...ProductExist,quantity:ProductExist.quantity-1}:item)
      );
    }
  };
    return (
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        <Directions productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
      </Router>
    </div>
    )
}
//<Directions productItems={productItems}/>
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
