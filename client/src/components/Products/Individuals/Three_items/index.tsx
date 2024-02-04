import React from 'react'
import Slim_fit from './Slim_fit'
import Product from './Products'

const index = () => {
  return (
    <div className=' flex w-screen min-h-96'>
      <Slim_fit />
      <Product />
    </div>
  )
}

export default index