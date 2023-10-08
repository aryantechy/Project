import p1 from "./public/about.png"
import p2 from "./public/product1.png"
import p3 from "./public/product2.png"
import { useUser } from "@clerk/nextjs";



export const links = [

    {
      name: "Home",
      no:"1",
      to:"/",
      
      
    },
    {
      name: "About",
      no:"2",
      to:"about"
    },
   ,
      {
        name:"Product",
        no:"23",
        to:"product"

      },
    {
      name: "Contact",
      no:"3",
      to:"contact"
    },
    // {
    //     name:"Signin",
    //     no:"4",
    //     to:"sign-in"
    // },
    // {
    //     name:"Signup",
    //     no:"5",
    //     to:"sign-up"
    // }
  ] as const;

  export const productdata=[
    {
      name:" Gas Stove Safety System  ",
      price:"5000",
      desc:"It integrates temperature reading sensors and an emergency alarm to enhance kitchen safety and prevent potential hazards associated with gas stoves. ",
      img:"about.png",
    } ,  {
      name:" Digital Stove",
      price:"2500",
      desc:" A gas stove is a kitchen appliance that uses natural gas or propane to generate a controlled flame for cooking.",
      img:"product1.png",
    }  , {
      name:"Gas Stove",
      price:"3500",
      desc:" A gas stove is a kitchen appliance that uses natural gas or propane to generate a controlled flame for cooking.",
      img:"product2.png",
  }
  ] as const
  export const contactdata=[
    {
name:"Anand Tyagi",
ph_no:"7302777847",
Instaid:" https://instagram.com/imanandtyagi?igshid=MzRlODBiNWFlZA==",
img:"/Anand.png"
    },    {
name:"Chandra Prakash",
ph_no:"",
Instaid:"",
img:"/Chandra.png"

    },    {
name:"Anamika Singh",
ph_no:"",
Instaid:"",
img:"/Anamika.png"
    },    {
name:"Rajat Choudhary",
ph_no:"",
Instaid:"",
img:"/Rajat.png"
    },    {
name:"Saurav Bisht",
ph_no:"",
Instaid:"",
img:"/Saurav.png"
    },
] as const