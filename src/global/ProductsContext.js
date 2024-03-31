

import React, { createContext, useState, useEffect } from 'react';
import { db } from '../config/Config';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('Products').onSnapshot(snapshot => {
      const updatedProducts = snapshot.docs.map(doc => ({
        ProductID: doc.id,
        ProductName: doc.data().ProductName,
        ProductPrice: doc.data().ProductPrice,
        ProductImg: doc.data().ProductImg,
      }));
      setProducts(updatedProducts);
    });

    return unsubscribe;
  }, []); 

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;


