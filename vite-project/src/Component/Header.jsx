import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container-fluid">
        <div className="row bg-dark p-2">
            <div className="col-sm-12 d-flex justify-content-between">
                <h1 className='text-white-50 mt-2'>DigitalOcean</h1>
                <Link to="/cart" className='btn mt-2 mb-2 btn-primary btn-lg'>CART</Link>
            </div>
        </div>
    </div>
  )
}

export default Header