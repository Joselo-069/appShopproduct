import React from 'react'
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';
const API = 'http://api.escuelajs.co/api/v1/products'

function ProductList() {

  const products = useGetProducts(API)
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product,index) => (
          <ProductItem product={product} key={index}/>
        ))}
      </div>
    </section>
  )
}

export default ProductList