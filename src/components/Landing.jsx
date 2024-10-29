import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
   <>


<section className="hero">
        {/* <img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/10/07/realtime/30671961.jpg&x=0&y=0&sw=0&sh=0&exp=3600" alt="Fashion Models" class="hero-image"> */}
        <img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/10/07/realtime/30671961.jpg&x=0&y=0&sw=0&sh=0&exp=3600" alt="Fashion Models" class="hero-image" style={{height:'600px'}} />
        <div className="hero-text">


            <h2>Flight Mode</h2>
            <p>Discover the Collection</p>
        </div>
    </section>

    {/* second section */}

    <div className="container_two">
        <h2 className='mt-5'>Explore a Selection of the Maison's Creations</h2>

        <div className="grid-container mt-5 ">

            <div className="grid-item">

             
              <img src="https://th.bing.com/th/id/OIP.UJ3f4heiZQOehg4DzSbT2AHaJ3?w=500&h=666&rs=1&pid=ImgDetMain" alt=""  style={{height:"90%"}} />
               
                <p>Women's Bags</p>
            </div>
            <div className="grid-item">
              <img src="https://aaapurse.co/wp-content/uploads/2023/04/wsxc1661512483289_7.jpg" alt="" style={{height:"90%"}} />
                <p>Women's Small Leather Goods</p>
            </div>
            <div className="grid-item">
               <img src="https://i.pinimg.com/736x/4a/b2/c4/4ab2c4c8bca13001d5716cb20cf6e627.jpg" alt="" style={{height:"90%"}} />
                <p>Men's Shoes</p>
            </div>
            <div className="grid-item">
               <img src="https://th.bing.com/th/id/OIP.dM6a7QdnyapjIG6A2XOmKwHaJ4?rs=1&pid=ImgDetMain" alt="" style={{height:"90%"}} />
                <p>Men's Belts</p>
            </div>
            <div className="grid-item">

             
              <img src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mng-reveal-pilot-sunglasses--Z1834U_PM2_Front%20view.jpg" alt=""  style={{height:"90%"}} />
               
                <p>Sunglass</p>
            </div>
            <div className="grid-item">
              <img src="https://th.bing.com/th/id/OIP.pFW5lW8oQfZOh3_jca1UVwAAAA?rs=1&pid=ImgDetMain" alt="" style={{height:"90%"}} />
                <p>Perfumes</p>
            </div>
            <div className="grid-item">
               <img src="https://i.pinimg.com/originals/d4/18/0f/d4180fff1b96b4c637a567139c37d41b.jpg" alt="" style={{height:"90%"}} />
                <p>men's Bags</p>
            </div>
            <div className="grid-item">
               <img src="https://i.pinimg.com/originals/55/59/55/555955986fc0edcc83e4e2032e8f9b98.jpg" alt="" style={{height:"90%"}} />
                <p>men's small leather goods</p>
            </div>
        </div>
    </div>

    {/* third section */}

    <div className='container_three'>

      <h6 className='text-center mt-5'>Gifts</h6>
      <h4 className='text-center'>Festive Gifting</h4>
      <div className='d-flex justify-content-center'><Link to={'/Forher'}><a href="">For her</a></Link>
      <Link to={'/Forhim'}><a href="" className='ms-3'>For him</a></Link>
      </div>
      
    </div>

    <div className='container_fixed'>
      
    </div>

    {/* fourth section */}


 
      <div className='container_four mt-5'>
        <div className="card-grid">
        <div className="grid-item ">
          <img src="https://th.bing.com/th/id/OIP.miPUu61m8zhPKQGEiGf0pAHaJ4?rs=1&pid=ImgDetMain" alt="Pooch Bag" style={{height:"75%"}}/>
          <p>OnTheGo MM</p>
          <p>₹4,70,000.00</p>
        </div>
        <div className="grid-item ">
          <img src="https://th.bing.com/th/id/OIP.h1HYwgdfhTW9c_hCRcmodAHaJx?rs=1&pid=ImgDetMain" alt="Dog Collar MM" style={{height:"75%"}}/>
          <p>Reykjavik scarf</p>
          <p>₹42,000.00</p>
        </div>
        <div className="grid-item ">
          <img src="https://th.bing.com/th/id/OIP.JcQyYQr7cNKSXhFi3Z2grgHaJl?w=500&h=647&rs=1&pid=ImgDetMain" alt="IV Paw Key Holder and Bag Charm" style={{height:"75%"}}/>
          <p>nano madeleine</p>
          <p>₹74,000.00</p>
        </div>
        <div className="grid-item ">
          <img src="https://www.purseblog.com/images/2015/01/Louis-Vuitton-Fall-2015-Menswear-Bags-5.jpg" alt="Keepall Bandoulière 25" style={{height:"75%"}}/>
          <p>boulogne</p>
          <p>₹2,31,000.00</p>
        </div>
      </div>
   
      </div>



    {/* fifth */}

    <div className='container_five'>

<h6 className='text-center mt-5'>Men</h6>
<h4 className='text-center'>Acessories</h4>
<div className='d-flex justify-content-center'><a href="">Explore the selection</a>

</div>

</div>

<div className='container_fixed_2'>
      
    </div>

    {/* sixth section */}

    <div className='container_six'>
        <div className="card-grid">
        <div className="grid-item">
                 <img src="https://th.bing.com/th/id/OIP.ftrcvUgFXOcwRa_F6FiiagHaHa?w=1440&h=1440&rs=1&pid=ImgDetMain" alt="" style={{height:"85%"}} />
                  <p>LV Must 40mm Reversible Belt </p>
                  <p className='py-1'>₹ 274000.00</p>
              </div>
              <div className="grid-item">
                 <img src="https://th.bing.com/th/id/OIP.-FxjfFCZcnu5pXNh24cr4gHaHa?w=4096&h=4096&rs=1&pid=ImgDetMain" alt="" style={{height:"85%"}} />
                  <p>LV Must 40mm Reversible Belt</p>
                  <p className='py-1' >₹ 82,500.00</p>
              </div>
              <div className="grid-item">
                 <img src="https://th.bing.com/th/id/OIP.QZiksqNtRK1XiSWeW87Q4QHaHa?rs=1&pid=ImgDetMain" alt="" style={{height:"85%"}} />
                  <p>LV Must 30mm Reversible Belt  </p>
                  <p className='py-1'>₹ 1,93,000.00</p>
              </div>
              <div className="grid-item">
                 <img src="https://th.bing.com/th/id/OIP.E0IIaLedZi77yHUgz-yoHgHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain" alt="" style={{height:"85%"}} />
                  <p>LV Must 40mm Bel</p>
                  <p className='py-1'>₹ 2,52,000.00</p>
                  
              </div>
      </div>
   
      </div>

  
      

      {/* seventh section */}

      <div className='container_seven '>
        <h3 className='text-center mt-5 py-2'>Louis Vuitton</h3>
        <p className='text-center'>Louis Vuitton offers complementary wrapping on all orders, <br /> carefully packaged in the Maison's iconic boxes</p>
      </div>


      <div className="container_grid">
      <div className="itemgrid">
        <img src="https://di2ponv0v5otw.cloudfront.net/posts/2022/07/27/62e1a24432c1dc763aa138dd/m_62e1a256efd0e491f3ed4f78.jpg" alt="Services" />
        <h2>Services</h2>
        <a href="#">Contact Us</a>
      </div>
      <div className="itemgrid">
        <img src="https://th.bing.com/th/id/OIP.sH2PEWJEve3McuupUNzSfQHaHa?w=800&h=800&rs=1&pid=ImgDetMain" alt="Art of Gifting" />
        <h2>Art of Gifting</h2>
        <a href="#">Gifts for Women</a>
        <a href="#">Gifts for Men</a>
      </div>
      <div className="itemgrid">
        <img src="https://th.bing.com/th/id/OIP.HO-2Azg-mDHxgpX773csXwHaHa?rs=1&pid=ImgDetMain" alt="Personalisation" />
        <h2>Personalisation</h2>
        <a href="#">Explore</a>
      </div>
    </div>










  
   </>
  )
}

export default Landing