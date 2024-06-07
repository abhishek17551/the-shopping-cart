import React from 'react'
import { CartState } from '../context/Context'
import ProductCard from './ProductCard';
import './styles.css'
import Filters from './Filters';

const Home = () => {
  const {state : {products}} = CartState();
  
  return (
    <div className='home'>
      <Filters/>
      <div className='product-container'>
        {
          products.map((item) => {
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