import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cspocket1 from './../../images/cspocket1.jfif';
import cspocket2 from './../../images/cspocket2.jfif';
import cspocket3 from './../../images/cspocket3.jfif';
import cspocket4 from './../../images/cspocket4.jfif';


function About() {
  return (
    <div className='about-page mt-5'>
    <Carousel>
    <Carousel.Item interval={500}>
      <img style={{height:'70vh'}}
        className="d-block w-100 float-right"
        src={cspocket1}
        alt="cspocket"
      />
      
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src={cspocket2}
        alt="cspocket"
      />

    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img style={{height:'70vh'}}
        className="d-block w-100 float-right"
        src={cspocket3}
        alt="cspocket"
      />

      
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img style={{height:'70vh'}}
        className="d-block w-100 float-right"
        src={cspocket4}
        alt="cspocket"
      />
      
    </Carousel.Item>
    
  </Carousel>
  </div>
  )
}

export default About
