import React from 'react'
import { CartState } from '../context/Context'
import ProductCard from './ProductCard';
import './styles.css'
import Filters from './Filters';

const Home = () => {
  const {state : {products},
  productState : {byStock,byFastDelivery,byRating,searchQuery,sort}
} = CartState();

  const filteredProducts = () => {
    let sortedProducts = products

    if(sort) {
      sortedProducts = sortedProducts.sort((a,b) => sort === 'lowToHigh' ? a.price - b.price : b.price - a.price)
    }

    if(!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }

    if(byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }

    if(byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating)
    }

    if(searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
    }


    return sortedProducts
  }
  
  return (
    <div className='home'>
      <Filters/>
      <div className='product-container'>
        {
          filteredProducts().map((item) => {
            return (
            <ProductCard prod={item} key={item.id}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default Home