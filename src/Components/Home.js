import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import pic from "./first1.jpg";
import pic1 from "./second2.jpg";
import pic2 from "./four.jpg";
import "./Home.css"
export const Home = () => {
  return (
    <>
        
         <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block "
          src={pic}
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"Live, love, eat."</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={pic1}
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"Eat right, exercise, die anyway."</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={pic2}
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"Good people, good food, good time.</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}
export default Home