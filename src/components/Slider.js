import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './sliderImages/slider1.jpg'
import img2  from './sliderImages/slider2.jpg'
import img3  from './sliderImages/slider3.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './slider.css'



const Slider = () => {
    return (
        <>
            <Container >
               
                  
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} md={12} sm={12}>
                        <Carousel >
                            <Carousel.Item>
                                <img src={img1} alt='img1' className='sliderimg' />
                            </Carousel.Item>
                            <Carousel.Item><img src={img2} alt='img1' className='sliderimg' /></Carousel.Item>
                            <Carousel.Item><img src={img3}  alt='img1' className='sliderimg' /></Carousel.Item>


                        </Carousel>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
           

        </>
    )
}

export default Slider
