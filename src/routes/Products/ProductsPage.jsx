import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProductsCardContainer from './ProductsCardContainer'
import Subscribe from '../../components/Subscribe'

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <ProductsCardContainer />
      <Subscribe />
      <Footer />  
    </>
  )
}

export default ProductsPage