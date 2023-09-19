import React, {useState, useEffect} from 'react'
import {useContext} from "react"
import { HotSpot } from '../CreateData/Creating'

const Cart = () => {
    let {CartData,setCartData} = useContext(HotSpot)
    const [StoreClone, setStoreClone] = useState([])

   useEffect(() => {
    setStoreClone(CartData)
   },[CartData]);

return (
    <>
    <div className="container-fluid">
        <div className="row">
            <h1 className='text-center p-2 text-white-50 bg-black'>View Cart</h1>
        </div>
    </div>
    <div className='container'> 
        <div className="row">
            {StoreClone.map((evalue, index) => (
            <div className="col-sm-12 mt-5 d-flex justify-content-center gap-5" key={index}>
               <img src={evalue.images} width={"200px"}  className='img img-fluid' alt="" />
               <h3 className='mt-5'>{evalue.title}</h3>
               <div className="mt-2 fw-bolder">
               <h5 className='mt-5'>Price: {evalue.price * evalue.Quantity}</h5> 
               </div>
               <button className='btn btn-primary mt-5 mb-5' onClick={() => {
                  const Valuess = StoreClone.map((v , i) => {
                    return index === i ? {...v,Quantity:v.Quantity + 1} : v
                   })
                   setCartData(Valuess)
               }}>+</button> 
               <h5 className='mt-5'>{evalue.Quantity}</h5>
               <button className='btn btn-primary mt-5 mb-5'  onClick={() => {
                  const Valuess = StoreClone.map((v , i) => {
                    return index === i ? {...v,Quantity:v.Quantity - 1} : v
                   })
                   setCartData(Valuess)
               }}>-</button>      
            </div>
            ))}
        </div>
        <div className="row">
            <div className="col-ms-12">
              <h1 className='text-end'>
               Total Price: {StoreClone.map(i => i.price * i.Quantity ).reduce((c,i) => c + i,0)}
              </h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart