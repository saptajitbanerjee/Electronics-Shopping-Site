import React from 'react'
import Products from './Products'
import Signup from './Signup'
import Cart from './Cart'

import {Route,Routes} from "react-router-dom"
const Directions = ({productItems,cartItems,handleAddProduct,handleRemoveProduct}) =>
{
    //console.log(({productItems}.productItems)[1].name);
    return( 
    <div>
        <Routes>
            <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>}/>
        </Routes>
    </div>
    )
} 
//<Route path="/" element={<Products productItems={productItems}/>}/>
export default Directions;