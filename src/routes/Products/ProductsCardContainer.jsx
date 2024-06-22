import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { data } from '../../data/Data'

const ProductsCardContainer = () => {
//  console.log(data)
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const apiURL = 'https://empire-api-sm.vercel.app/products'
    axios.get(apiURL)
      .then((response) => {
        setProducts(response.data)
        setAllProducts(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data from API: ', error)
      })
  }, [])

// Filter Type
  const filterType = (category) => {
    setProducts(
      allProducts.filter((item) => {
        return item.category === category
      })
    )
  }

// Filter Price
  const filterPrice = (price) => {
    setProducts(
      allProducts.filter((item) => {
        return item.price === price
      })
    )
  } 

return (
    <div className='mt-[90px] bg-[var(--primary-red)]'>
      <div className='max-w-[1240px] m-auto px-4 py-12'>
        <h1 className='text-[var(--primary-gold)] font-bold text-4xl text-center'>Top Rated Products</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
          {/* Filter Type */}
          <div>
            <p className='font-bold text-[var(--primary-gold)] m-4'>Filter Type</p>
            <div className='flex justify-between max-w-[640px] flex-wrap'>
              <button onClick={() => setProducts(allProducts)} className='m-1 px-3 py-1'>All</button>
              <button onClick={() => filterType('Costumes')} className='m-1 px-3 py-1'>Costumes</button>
              <button onClick={() => filterType('Accessories')} className='m-1 px-3 py-1'>Accessories</button>
              <button onClick={() => filterType('Toys')} className='m-1 px-3 py-1'>Toys</button>
              <button onClick={() => filterType('Books')} className='m-1 px-3 py-1'>Books</button>
              <button onClick={() => filterType('Others')} className='m-1 px-3 py-1'>Others</button>
            </div>
          </div>
          {/* Filter Price */}
          <div>
            <p className='font-bold text-[var(--primary-gold)] m-4'>Filter Price</p>
            <div className='flex justify-between max-w-[490px] w-full'>
              <button onClick={() => setProducts(allProducts)} className='m-1 px-3 py-1'>All</button>
              <button onClick={() => filterPrice('$')} className='m-1 px-3 py-1'>$</button>
              <button onClick={() => filterPrice('$$')} className='m-1 px-3 py-1'>$$</button>
              <button onClick={() => filterPrice('$$$')} className='m-1 px-3 py-1'>$$$</button>
              <button onClick={() => filterPrice('$$$$')} className='m-1 px-3 py-1'>$$$$</button>
            </div>
          </div>
        </div>
        {/* Display Products */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {products.map((item) => (
            <a key={item.id} href={item.link} target='blank'>
            <div className='border border-[var(--primary-gold)] shadow-lg rounded-lg hover:scale-105 duration-300'>
              <img src={item.image} alt={item.name} 
                className='w-full h-[200px] object-cover rounded-t-lg'
              />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold text-[var(--primary-gold)]'>{item.name}</p>
                <p>
                  <span className='bg-[var(--dark-purple)] border border-[var(--primary-gold)] text-[var(--primary-gold)] p-1 rounded-full'>{item.price}</span>
                </p>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsCardContainer