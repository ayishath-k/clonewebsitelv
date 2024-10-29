import React from 'react'
import { Link } from 'react-router-dom'


function Wishlist() {
  return (
    <>

    <div className='text-center py-5'>
      <h4 className='py-2'> your Wishlist is Empty!</h4>
      <h6>Add your Favorite items and share them.</h6>
      <h6>Need Inspiration?</h6>
      <Link to={'/Sign'}><button className='ms-1 mt-3 rounded' style={{border:'none',backgroundColor:'black',color:'white',padding:'5px'}}><small>Sign In</small></button></Link>
      <Link to={'/'}><button className='ms-3 rounded ' style={{border:'none',backgroundColor:'black',color:'white',padding:'5px'}}><small>Home</small></button></Link>
    </div>
    </>
  )
}

export default Wishlist