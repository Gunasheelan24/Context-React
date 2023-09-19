import React from 'react'
import { useContext } from 'react'
import { HotSpot } from '../CreateData/Creating'
import Header from './Header'
import Footer from './Footer'

const Product = () => {
    const {SpotData,onclickButton} = useContext(HotSpot)
    return (
    <>
    <Header />
    <div className="container">
        <div className="row">
            {SpotData.map((MapData,index) => (
              <div className="col-sm-4 mt-4" key={index}>
                <div className="card">
                 <img src={MapData.images} className="img img-fluid" width={'350px'} style={{height:'250px'}}  alt="" className="img img-fluid" />
                 <h6 className="text-center mt-3">{MapData.title}</h6>
                 <p className="text-center">Price: {MapData.price}</p>
                <button onClick={() => (onclickButton(MapData))} className='btn btn-dark text-white mb-4 ms-5 me-5'>ADD TO CART</button>
              </div>
            </div>
            ))}
        </div>
    </div>
    <Footer />
  </>
  )
}

export default Product