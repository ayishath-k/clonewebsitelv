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

function Forhim() {
  return (
   <>
     <DropdownButton  id="dropdown-item-button" title="For him">
      <Dropdown.ItemText>All gifts</Dropdown.ItemText>
      <Dropdown.Item as="button">For her</Dropdown.Item>
      <Dropdown.Item as="button">For babies </Dropdown.Item>
      <Dropdown.Item as="button">For Couples</Dropdown.Item>
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

      <div className='container_fixed' style={{backgroundImage:'url(https://i.pinimg.com/736x/11/a0/b4/11a0b4e66a79c92b9f5ef4d3406ddcb5.jpg)'}}>
      
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
    </Box></>
  )
}
const itemData = [
    {
      img :
       'https://www.spottedfashion.com/wp-content/uploads/2015/01/Louis-Vuitton-Monogram-Canvas-with-Blue-Trim-Small-Messenger-Bag-Fall-2015.jpg',
      title: 'Sling bag',
      author: 'Sling bag  $2000',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.R4Ka5E8SUp0gxiUu1tLzkQAAAA?w=474&h=474&rs=1&pid=ImgDetMain',
      title: 'belt',
      author: 'belt $355',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.Uxv6dty8_6nArWcie5OEygAAAA?rs=1&pid=ImgDetMain',
      title: 'bracelet',
      author: 'bracelet $566',
    },
    {
      img: 'https://th.bing.com/th/id/R.12f5d2a2a2234d4e0039369ae54186b3?rik=4d0vm1WiYsI%2fTQ&riu=http%3a%2f%2fwww.philippelacombe.com%2fpicsengine%2fpictures%2flarge%2f1537460675Qkvh.jpg&ehk=VD7k8u9mJvRrxD6Uvc5aVyatNqek2NLZEeSglAYEd40%3d&risl=&pid=ImgRaw&r=0',
      title: 'watch',
      author: 'watch $499',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.85fBtynFmfC1fD_RnacwZQHaHP?rs=1&pid=ImgDetMain',
      title: 'perfume',
      author: 'perfume $777',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.kNVhjMqq8lhZ8AAoLWGCpAHaHa?rs=1&pid=ImgDetMain',
      title: 'sunglass',
      author: 'sunglass $566',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.R9tXWuVhbsZMMI0bOOD7tQAAAA?rs=1&pid=ImgDetMain',
      title: 'shoe',
      author: 'shoe $388',
    },
    {
      img: 'https://i.pinimg.com/originals/05/50/ac/0550acb8b5df83310c080c0746e3c2c5.jpg',
      title: 'perfume',
      author: 'perfume $999',
    },
    {
      img: 'https://th.bing.com/th/id/OIP._x9Es8wO53suDbOU4S7IZQAAAA?rs=1&pid=ImgDetMain',
      title: 'bag',
      author: 'bag $675',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.HnDSY4ACZu71-AuKlwfg0gHaLH?rs=1&pid=ImgDetMain',
      title: 'lap bag',
      author: 'lapbag $99',
    },
    {
      img: 'https://i.pinimg.com/originals/ce/a5/3b/cea53bdbde8be4b29147728f34940124.jpg',
      title: 'shoe',
      author: 'sneakers $56',
    },
    {
      img: 'https://i.pinimg.com/736x/1d/cc/ba/1dccba6eb17e5d79fc6a6a01051a09ab.jpg',
      title: 'bag',
      author: 'sling bag $999',
    },
  ];

export default Forhim