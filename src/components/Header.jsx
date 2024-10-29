
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';



function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showsearch, setShowsearch] = useState(false);

  const handleClosesearch = () => setShowsearch(false);
  const handleShowsearch = () => setShowsearch(true);

  return (
    

<header>
 <navbar>
  <Container style={{height:'70px'}}>
      <div className='d-flex justify-content-between mt-5'>
        <div className="div"> <button onClick={handleShow}  style={{border:'none',cursor:'pointer',backgroundColor:'white'}}><FontAwesomeIcon icon={faBars} size="xl" style={{color: "#050505",}} className='me-2' /> </button><small>Menu</small> 


        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>LOUIS VUITTON</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul style={{listStyle:'none',padding:'0'}}>
                    
                    <li>Festive Gifting</li>
                    <li>New</li>
                    <li>Bags and Small Leather Goods</li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Jewellery</li>
                    <li>Watches</li>
                    <li>Perfumes</li>
                    <li>Trunks, Travel and Home</li>
                    <li>Services</li>
                    <li>The Maison Louis Vuitton</li>
                </ul>
                <hr />

              <div className='footer'>
                  <p>sustainability</p>
                  <p>india</p>
                  <p>can we help you ?</p>
                  <p>Contact:954673882</p>
              </div>


        </Offcanvas.Body>
      </Offcanvas>

 <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{color: "#00040a",}} className='ms-2' id='search' onClick={handleShowsearch} /> <small>Search</small></div>

 <Modal show={showsearch} onHide={handleClosesearch}>
        <Modal.Header closeButton>
          <Modal.Title>LOUIS VUITTON</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder='search' className='w-100 rounded p-1' />
        </Modal.Body>
        
      </Modal>


        <div className="div"><h2>LOUIS VUITTON</h2></div>
        <div className="div">
          <small>call us</small>
       <Link to={'/Wishlist'}> <FontAwesomeIcon icon={faHeart} size='xl' style={{color: "#00040a",}} className='ms-4' /></Link>
          <FontAwesomeIcon icon={faUser} size='xl' style={{color: "#0a0a0a",}} className='ms-4'/> 
          </div>
      </div>

                

  </Container>
 </navbar>



</header>

  

  )
}


export default Header