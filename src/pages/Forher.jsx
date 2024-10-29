import React from 'react'
import './Forher.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcaseRolling,faGift ,faChampagneGlasses} from '@fortawesome/free-solid-svg-icons';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';



function Forher() {
  return (
    <>
     <DropdownButton  id="dropdown-item-button" title="For her">
      <Dropdown.ItemText>All gifts</Dropdown.ItemText>
      <Dropdown.Item as="button">For him</Dropdown.Item>
      <Dropdown.Item as="button">For babies </Dropdown.Item>
      <Dropdown.Item as="button">For</Dropdown.Item>
    </DropdownButton>

    {/* main section */}
<div className='main_img'>
    <img src="https://luclubs.com/wp-content/uploads/2024/08/COMMERCIAL_GIFT_GUIDE_ALWAYS_ON_07_LVCOM_1920x1080_DI3.jpg" alt="no image" style={{height:'600px',width:'100%'}}  />

</div>

<section className="content">
        <div className="top-bar"></div>
        <p className="description text-center">
         Experience the essence of the Maison through an array of emblematic creations
        </p>
        <div className="menu-items mt-4">
          <div className="menu-item">
        
          <p><FontAwesomeIcon className='me-2' icon={faSuitcaseRolling} size="xl" style={{color: "#00040a",}} />Art of travel</p>
            
           
          </div>
          <div className="menu-item">
            <p><FontAwesomeIcon  className='me-2'  icon={faGift} size="xl" style={{color: "#010813",}} /> Celebrations</p>
           
          </div>
          <div className="menu-item">
            <p><FontAwesomeIcon  className='me-2'  icon={faChampagneGlasses} style={{color: "#00040a",}} />Festive Gifting</p>
           
          </div>
        </div>
      </section>

      <div className='container_fixed'>
      
    <div className='container_text'>
            <h1 className='text-center text-light' style={{fontSize:'80px'}}>Art Of travel</h1>
            <p className='text-center text-light'>Travel with the Louis Vuitton elegant selection of handbags and signature accessories.</p>
    </div>
      </div>

      {/* image list */}
      <Box sx={{  height: 450, overflowY: 'scroll' }} style={{width:'100%',height:'800px'}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

   




    </>
  )
}
   const itemData = [
  {
    img :
     'https://th.bing.com/th/id/OIP.zrGrgxclIElu8U4J-2I1qQHaHa?rs=1&pid=ImgDetMain',
    title: 'Sling bag',
    author: 'Sling bag  $2000',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.VEiLSjrVn7ZsPPWwDxAR6wHaHa?w=1280&h=1280&rs=1&pid=ImgDetMain',
    title: 'Books',
    author: 'shoe $355',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.VWuX3IwoKUrfht-nIxAVWgHaHa?rs=1&pid=ImgDetMain',
    title: 'Sink',
    author: 'shoes $566',
  },
  {
    img: 'https://i.pinimg.com/originals/9f/5c/8f/9f5c8f1ea6db0a3e983156e97e242cd9.jpg',
    title: 'sandal',
    author: 'sandals $499',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.E5JhD0rBMCo7wV69uWHAOwAAAA?rs=1&pid=ImgDetMain',
    title: 'Blinds',
    author: 'Tshirt $777',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.elyn8-z94Dn5WpjWFkoFhQAAAA?w=474&h=474&rs=1&pid=ImgDetMain',
    title: 'Chairs',
    author: 'sneakers $566',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.ANG-mNQyITnteRb5CXtzQgHaHX?rs=1&pid=ImgDetMain',
    title: 'Laptop',
    author: 'Sandals $388',
  },
  {
    img: 'https://i.pinimg.com/736x/98/54/61/985461b6f6992b15694cc7c2c84618bc.jpg',
    title: 'Doors',
    author: 'Bags $999',
  },
  {
    img: 'https://fimgs.net/mdimg/secundar/o.77520.jpg',
    title: 'Coffee',
    author: 'Perfume $675',
  },
  {
    img: 'https://i.ebayimg.com/images/g/b1IAAOSwddJmci0a/s-l960.jpg',
    title: 'Storage',
    author: 'bracelet $99',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.98_SFYl4gJd2VAZKyvvBQwHaHa?rs=1&pid=ImgDetMain',
    title: 'Candle',
    author: 'bracelet $56',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.jxucFQtoco2Y8dgY1xEcqQHaHa?w=720&h=720&rs=1&pid=ImgDetMain',
    title: 'Coffee table',
    author: 'sling bag $999',
  },
];
   

export default Forher
