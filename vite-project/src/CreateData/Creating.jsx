import React, { useState } from "react";
import { createContext } from "react";
let HotSpot = createContext();  

function DataFunction({children}) {
  const [SpotData, setSpotData] = useState([ {
    "id": 1,
    "Quantity":1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images":"https://i.dummyjson.com/data/products/1/3.jpg"
},
{
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "Quantity":1,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": "https://i.dummyjson.com/data/products/2/1.jpg"
},
{
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "Quantity":1,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    "images":"https://i.dummyjson.com/data/products/3/1.jpg"
},
{
    "id": 4,
    "title": "Hp 15s",
    "description": "Hp Laptop With Full Hd Display",
    "price": 32000,
    "Quantity":1,
    "discountPercentage": 7.91,
    "rating": 4.5,
    "stock": 146,
    "brand": "HP",
    "category": "Laptop",
    "thumbnail": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/u/w/-original-imagtcrvzrqnnxpc.jpeg?q=70",
    "images":"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70",
},
{
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "Quantity":1,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images":"https://i.dummyjson.com/data/products/5/1.jpg",
},
{
  "id": 6,
  "title": "ASUS Chromebook",
  "description": "11.6 Inch HD, LCD (Anti-glare display, LED Backlit, Brightness : 200nits, NTSC: 45%)",
  "price": 32000,
  "Quantity":1,
  "discountPercentage": 12.58,
  "rating": 4.40,
  "stock": 322,
  "brand": "Asus",
  "category": "laptop",
  "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  "images":"https://rukminim2.flixcart.com/image/416/416/kwnv6a80/computer/9/c/i/-original-imag9aajekwegabt.jpeg?q=70",
}
])

const [CartData, setCartData] = useState([])

function onclickButton(RecivedValue) {
    setCartData([...CartData, RecivedValue]);
}

  return (
    <HotSpot.Provider value={{SpotData,setSpotData,onclickButton,CartData,setCartData}}>
      {children}
    </HotSpot.Provider>
  )
}

export {HotSpot, DataFunction}