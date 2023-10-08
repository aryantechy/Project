import { ProfileCard } from '@/components/ProfileCard'
import { contactdata } from '@/data'
import React from 'react'

const page = () => {
  return (
  
  <div className=' flex gap-10 flex-wrap items-center justify-center '>
    {contactdata.map((item)=>(
      <div key={ item.name}>

      <ProfileCard name={item.name} src={item.img} phno={item.ph_no} />
      </div>
    ))}
  </div>
   
  )
}

export default page
