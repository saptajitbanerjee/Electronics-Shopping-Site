import React from 'react'
import "./Products.css"
import {FaRupeeSign} from 'react-icons/fa/';
import {MdAddBox} from 'react-icons/md/';
import Carousel from "./Carousel";
const Products = ({productItems,handleAddProduct}) => 
{
  
  return(
    <div>
      <Carousel/>
    <div className='products'>
    {productItems.map((productItem) => (
        <div key={productItem.id} className='card'>
            <img className='product-image' src={productItem.image} alt={productItem.name}/>
            <h4>{productItem.name}</h4>
            <p><FaRupeeSign/><b><i>{productItem.price}</i></b></p>
            <button className='product-add-button' onClick={()=>handleAddProduct(productItem)}>Add To Cart <MdAddBox size={25}/></button>
        </div>
    ))}
    </div>
    </div>
  );
};
//<img className='product-image' src={productItem.image} alt={productItem.name}/>
/*{productItems.map((productItem) => {
  <div className='card'>
    <div>
        List Of Products
    </div>
  </div>
})}*/
export default Products;
//<img className='product-image' src={productItem.image} alt={productItem.name}/>
/*{productItems.map((productItem) => {
  <div className='card'>
    <div>
        List Of Products
    </div>
  </div>
})}*/
/*
<div className='products'>
    <div className='card'>
      Product List      
  </div>
  </div>
*/