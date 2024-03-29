<<<<<<< HEAD
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    // <main className=" min-h-screen items-center justify-between p-24">
    <div className='  flex-row flex gap-4 w-full items-center justify-center mt-16  h-full p-16'>
      <div className='w-1/2 '>
        <Image src={"/about.png"} alt='image'  height={400} width={400}  className=' rounded-xl'/>
<div>
  <Button>Problem</Button>
  <Button> Solution</Button>
</div>

      </div >
   

      <div className= 'w-1/2'>
        <h1 className='    font-semibold text-yellow-100'> A gas safety system is designed to ensure the safe and efficient use of gas in various settings. It typically consists of several components, including gas detectors, gas shut-off valves, and ventilation systems. Gas detectors are installed to detect any leaks or abnormal levels of gas, triggering an alarm or alert to notify occupants of potential dangers. Gas shut-off valves automatically shut off the gas supply in the event of a leak or other hazardous situations. Ventilation systems help to maintain a healthy and safe environment by effectively dissipating any accumulated gas. Implementing a comprehensive gas safety system is crucial to prevent accidents, protect lives, and minimize the risks associated with gas use. </h1>

=======
"use client";
// import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="  flex-row flex gap-4 w-full items-center justify-center mt-16  h-full p-16">
      <div className="w-1/2 ">
        <Image
          src={"/about.png"}
          alt="image"
          height={400}
          width={400}
          className=" rounded-xl pb-10"
        />
 <a href="/p2.png" target="_blank" className="m-2 inline-flex items-center justify-center rounded-xl border border-transparent bg-gray-600 px-5 py-3 font-medium text-white hover:bg-gray-700">Problem </a>
<a href="/p1.png" target="_blank" className="m-2 inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 font-medium text-gray-600 shadow hover:bg-blue-50"> Solution</a>
        {/* <div className=" flex items-center space-x-10">
          <a href="/p1.png"  target="_blank" >
            <Button ripple={true} className=" gap-5 hover:scale-105">
              Problem
            </Button>
          </a>
          <a
            href="/p1.png"  target="_blank" 
          >
            <Button ripple={false} className=" gap-5  hover:scale-105">
              Solution
            </Button>
          </a>
        </div> */}
>>>>>>> 9d0a6ba0b5f4395c27f19df03b42ccf0e303a81d
      </div>

      <div className="w-1/2">
        <h1 className="    font-semibold text-yellow-100">
          {" "}
          A gas safety system is designed to ensure the safe and efficient use
          of gas in various settings. It typically consists of several
          components, including gas detectors, gas shut-off valves, and
          ventilation systems. Gas detectors are installed to detect any leaks
          or abnormal levels of gas, triggering an alarm or alert to notify
          occupants of potential dangers. Gas shut-off valves automatically shut
          off the gas supply in the event of a leak or other hazardous
          situations. Ventilation systems help to maintain a healthy and safe
          environment by effectively dissipating any accumulated gas.
          Implementing a comprehensive gas safety system is crucial to prevent
          accidents, protect lives, and minimize the risks associated with gas
          use.{" "}
        </h1>
      </div>
    </div>
  );
};

export default page;
