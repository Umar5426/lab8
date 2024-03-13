import React, { useEffect } from 'react';
import { fetchProducts } from '../services/apiService';
import { useProductsContext } from '../context/ProductsContext';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const { products, setProducts } = useProductsContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.products);
    };
    getProducts();
  }, [setProducts]);

  return (
    <div>
      <h2>Products</h2>
      <ul className="list-group">
        {products.map((product, index) => (
          <li key={product.id} className="list-group-item hover-highlight" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{product.title}</h5>
              <small>${product.price}</small>
            </div>
            <p className="mb-1">{product.description}</p>
            <small>Brand: {product.brand}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
