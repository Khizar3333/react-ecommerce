// import React,{useContext,useState} from 'react'
// import {ProductsContext} from "../global/ProductsContext"
// import { CartContext } from '../global/CartContext'

// const Products = () => {
//     const {products}=useContext(ProductsContext)
//     const { dispatch } = useContext(CartContext);   
  
//     const [minPrice, setMinPrice] = useState(0);
//     const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER); // Handle large values
  
//     const filteredProducts = products.filter(product =>
//       product.ProductPrice >= minPrice && product.ProductPrice <= maxPrice
//     )
//     const handlePriceFilterChange = (event) => {
//         const { name, value } = event.target;
    
//         if (name === 'minPrice') {
//           setMinPrice(parseFloat(value)); // Ensure valid number
//         } else if (name === 'maxPrice') {
//           setMaxPrice(parseFloat(value)); // Ensure valid number
//         }
//       };

 
//   return (
//     <>
//     {products.length !== 0 && <h1>Products</h1>}
//     <div className='products-container'>
//         {products.length === 0 && <div>slow internet...no products to display</div>}
//         {products.map(product => (
//             <div className='product-card' key={product.ProductID}>
//                 <div className='product-img'>
//                     <img src={product.ProductImg} alt="not found" />
//                 </div>
//                 <div className='product-name'>
//                     {product.ProductName}
//                 </div>
//                 <div className='product-price'>
//                     Rs {product.ProductPrice}.00
//             </div>
//                 <button className='addcart-btn' onClick={()=>{dispatch({type:"Add_to_cart",id:product.ProductID,product})}} >ADD TO CART</button>
//             </div>
//         ))}
//     </div>
//     <div className="filter-container">
//         <label htmlFor="minPrice">Min Price:</label>
//         <input
//           type="number"
//           id="minPrice"
//           name="minPrice"
//           value={minPrice}
//           onChange={handlePriceFilterChange}
//         />

//         <label htmlFor="maxPrice">Max Price:</label>
//         <input
//           type="number"
//           id="maxPrice"
//           name="maxPrice"
//           value={maxPrice}
//           onChange={handlePriceFilterChange}
//         />
//       </div>
//       {filteredProducts.map(product => (
//   <div className='product-card' key={product.ProductID}>
//     <div className='product-img'>
//       <img src={product.ProductImg} alt="not found" />
//     </div>
//     <div className='product-name'>
//       {product.ProductName}
//     </div>
//     <div className='product-price'>
//       Rs {product.ProductPrice}.00
//     </div>
//     <button className='addcart-btn' onClick={() => {
//       dispatch({ type: "Add_to_cart", id: product.ProductID, product })
//     }}>
//       ADD TO CART
//     </button>
//   </div>
// ))}

//       </>
    
//   )
// }

// export default Products

import React, { useContext, useState } from 'react';
import { ProductsContext } from "../global/ProductsContext";
import { CartContext } from '../global/CartContext';

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);

  const [filterPrice, setFilterPrice] = useState(Number.MAX_SAFE_INTEGER); // Initially no filter

  const filteredProducts = products.filter(
    (product) => product.ProductPrice <= filterPrice
  );

  const handlePriceFilterChange = (event) => {
    const value = parseFloat(event.target.value);
    setFilterPrice(value || Number.MAX_SAFE_INTEGER); // Handle empty input
  };

  return (
    <>
      {products.length !== 0 && <h1>Products</h1>}

      {/* Display a loading message while fetching products */}
      {products.length === 0 && <div>Loading products...</div>}

      <div className='products-container'>
        {filteredProducts.map((product) => (
          <div className='product-card' key={product.ProductID}>
            <div className='product-img'>
              <img src={product.ProductImg} alt="not found" />
            </div>
            <div className='product-name'>
              {product.ProductName}
            </div>
            <div className='product-price'>
              Rs {product.ProductPrice}.00
            </div>
            <button className='addcart-btn' onClick={() => {
              dispatch({ type: "Add_to_cart", id: product.ProductID, product })
            }}>
              ADD TO CART
            </button>
          </div>
        ))}
      </div>

      <div className="filter-container">
        <label htmlFor="filterPrice">Filter Price :</label>
        <input
          type="number"
          id="filterPrice"
          name="filterPrice"
          value={filterPrice === Number.MAX_SAFE_INTEGER ? '' : filterPrice} // Handle initial empty state
          onChange={handlePriceFilterChange}
        />
      </div>
    </>
  );
};

export default Products;


