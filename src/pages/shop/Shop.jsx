import React from 'react'
import { Products } from '../../products'
import Product from './Product'

const Shop = () => {
  return (
    <div className='md:px-4 pb-7 md:pb-11'>
        <div className='my-7 md:my-11 text-center text-2xl md:text-3xl'>
            <h2><b className='text-green-700'>Plants</b></h2>
        </div>

        <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-y-7 md:gap-y-10 md:gap-x-2'>
            {Products.map((product) => 
                <Product product={product} />
            )}
        </div>
    </div>
  )
}

export default Shop