"use client"
import { useUser, SignUp, SignIn } from '@clerk/nextjs';
import { links } from "@/data";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { useRouter } from "next/navigation";


const Header = () => {
  const { isSignedIn} = useUser();
  const router=useRouter()
  
  return (
    <div className=" bg-gray-400 h-16 flex  m-2  rounded-full opacity-80">
      <div className=" flex justify-start drop-shadow-2xl bg-yellow-100 rounded-full" >
        <Image src={"/aryan.png"} height={100} width={100} alt="logo" className=" cursor-pointer " />
      </div>

      <div className=" flex gap-10 items-center justify-center w-full ">
        
        {links.map((item) => (
          <div
            key={item?.no}
            className=" text-black hover:text-gray-200 transition cursor-pointer  font-medium"
          >
            <div onClick={()=>{router.push(`/${item?.to}`)}}>

            {item?.name}

            </div>
          
        
          </div>
        ))}
        {
          !isSignedIn &&
          <>
       
        <div className='  bg-gray-500  rounded-full w-20 h-8 flex items-center hover:scale-105 justify-center  '>
          <button className=' text-black    hover:text-gray-200 transition  font-medium ' onClick={()=>{router.push("/sign-in")}}>

        Sign-In
          </button>
        </div>
        <div className='  bg-gray-500 rounded-full w-20 h-8 flex  hover:scale-105 items-center justify-center'>
          <button  className=' text-black   hover:text-gray-200 transition  font-medium'  onClick={()=>{router.push("/sign-up")}}> 

        Sign-Up
          </button>
        </div>
         </>
         }

       
      </div>
      <div className=" flex  items-center justify-center  px-10">
          <UserButton afterSignOutUrl="/" />
        </div>

    </div>
  );
};

export default Header;
