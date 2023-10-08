"use client";

import React from "react";
import Image from "next/image";
interface profilecardprops {
  name?: string;
  phno?: string;
  insta_id?: string;
  src?: string;
}

export const ProfileCard: React.FC<profilecardprops> = ({
  name,
  phno,
  insta_id,
  src,
}) => {
  return (
    <div className="  ">
      <div className=" h-72 w-72 bg-gray-600 rounded-3xl flex items-center justify-center">
        <Image
          src={`${src}`}
          alt="profile"
<<<<<<< HEAD
=======
          quality={50}
>>>>>>> 59e622ddc553dbd6eb28e692b0dbb0d664e6a469
          width={200}
          height={200}
          className=" rounded-full  object-contain"
        />
      </div>
      <h1 className=" font-bold text-lg gap-2">{name}</h1>
      <>{phno == "" ? "" : <h1 className=" font-bold text-lg">ph-{phno}</h1>}</>
    </div>
  );
};
