

import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import dataContext from './Context/DataContext';
import { Link } from 'react-router-dom';
import shila from '../components/shilaphotos/shila.jpg'




const Footer = () => {

  const context = useContext(dataContext)
  const { items, getAllRecepies } = context
  const [myfooter,setmyFooter]=useState(items)
  // const[data,setData]=useState('')

  // const handleClick=(myId)=>{

  //   setData(myId)

  // }

  useEffect(() => {
    getAllRecepies()
  })



  return (
    <div className='footerbg'>
      <Container >
        <Row >
          {/* <Col lg={1}></Col> */}
          <Col lg={4} >
            <h6 className='mt-3 text-center '>पॉप्युलर रेसिपी </h6>
            <hr />
            {
              myfooter.slice(0, 5).map((value, index) => {
                return (
                  <ul >
                    <Link className='linkStyle' to={`/SingleRecepie/${value._id}`} ><li  >{value.name}</li></Link>
                  </ul>
                )
              })
            }
          </Col>
          <Col lg={2}></Col>
          <Col lg={4} >
            <h6 className='mt-3 text-center '>माझ्याबद्दल काही  </h6>
            <hr />
            

            <img src={shila} style={{ height: '150px', width: '150px' }} />
            <p>

              माझे नाव शिला पाटील आहे
              मी सांगली महाराष्ट्र येथील रहिवाशी आहे
              मी एक हाऊस वाइफ आहे .शिदोरी
              हे माझे you tube  चॅनेल आहे.तिथे मी सर्व प्रकारचा पारंपरिक पदार्थ दाखवते
              धन्यवाद
            </p>
          </Col>

          


        </Row>
        <hr/>
        <Row>all rights reserved</Row>
        <Row className='mt-5'></Row>

      </Container>

    </div>
  )
}

export default Footer
