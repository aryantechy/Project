"use client"
import ProductCard from '@/components/ProductCard'
import React from 'react'
import { productdata } from '../../data';

const page = () => {
  return (
    <div className=''>

    <div className=' flex items-center justify-center gap-8 ' >
       {productdata.map((item)=>(
         <div key={item.name}>
            <ProductCard product_name={item.name} product_desc={item.desc} product_img={item.img} product_price={item.price} />
        </div>
       ))}
    </div>
       </div>
  )
}

export default page
