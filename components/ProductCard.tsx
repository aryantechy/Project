"use client"
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  interface productcardprops{
    product_name:string,
    product_price:string,
    product_desc:string,
    product_img:string


  }

const ProductCard:React.FC<productcardprops> = ({product_desc,product_img,product_name,product_price}) => {
  return (
    <div className=' flex flex-col items-center justify-center  pt-16'>
        <div>

       
         <Card className=" w-[22.5rem]  bg-gray-300   hover:scale-105 transition">
      <CardHeader shadow={false} floated={false} className="h-48 hover:scale-105 transition">
        <img
          src={`/${product_img}`}
          alt="card-image"
          className="h-full w-full object-cover "
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {product_name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${product_price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
         {product_desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className=" bg-gray-500 hover:bg-gray-400 text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}

export default ProductCard
