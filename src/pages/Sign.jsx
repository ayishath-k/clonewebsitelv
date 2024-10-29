import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Sign() {
  return (
    <>
     <div className="login-container d-flex  " style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:'100vh'}}>
      
      <div className="login-content ms-4" style={{width:'55%',padding:'20px'}}>
        <h3>Welcome Back</h3>
        <p>Sign in with your email address and your password.</p>

        <form>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{fontWeight:'bold',display:'block'}}>Email*</label>
            <input className='mt-5' type="email" placeholder="Enter your email" style={{width:'100%',padding:'10px', borderRadius:'4px',border:'1px solid black'}} />
          </div>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{fontWeight:'bold',display:'block'}}>Password*</label>
            <input className='mt-5' type="password" placeholder="Enter your password"  style={{width:'100%',padding:'10px', borderRadius:'4px',border:'1px solid black'}} />
          </div>
          <a href="#">Forgot your password?</a>
          <button style={{width:'100%',padding:'10px',backgroundColor:'black',color:'white',border:'none',borderRadius:'4px'}} type="submit" className='mt-3'>Sign In</button>
        </form>
        <div className="one-time-login mt-2">
          <a href="#">Or use a one-time login link to sign in. Email me the link</a>
        </div>

        <div className="create-account">
          <p>Don’t have a MyLV account?</p>
          <a href="#">Create an Account</a>
          <h6 className='mt-4'>back to home <Link to={'/'}><FontAwesomeIcon icon={faBackward} size="xl" style={{color: "#000205",}} /></Link></h6>
        </div>
      </div>

     
        <div>
            
                  <aside className="info-box " style={{marginLeft:'40px',maxWidth:'300px',background:'#f8f8f8',padding:'20px',borderRadius:'8px'}}>
                    <h4 style={{fontWeight:'bold'}}>WHAT YOU WILL FIND IN YOUR MYLV ACCOUNT</h4>
                    <ul style={{listStyle:'none'}}>
                      <li><small>Track your orders, repairs and access your invoices</small></li>
                      <li><small>Manage your personal information</small></li>
                      <li><small>Receive newsletters from Louis Vuitton</small></li>
                      <li><small>Create, view and share your wishlist</small></li>
                    </ul>
                  </aside>
        </div>
        
     
    </div>


    </>
  )
}

export default Sign